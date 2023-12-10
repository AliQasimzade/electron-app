import Users from "../Models/UserModel.js";
import { getModule } from "../Helpers/GetRequestModule.js";
import { checkToken } from "../Helpers/CheckToken.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import fs from 'fs'
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getAllUsers = async (req, res) => {

    try {
        const token = req.token;
        const hasToken = checkToken(token);

        if (hasToken === "success") {

            const users = await Users.find({}, { password: 0 })



            if (!users) throw new Error("No users");


            return getModule(200, users, res);
        } else {
            throw new Error(hasToken);
        }

    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}

const createUser = async (req, res) => {
    try {
        const { password, email, name, surname } = req.body;
        const data = req.body

        
        if (!name) throw new Error("No name");
        if (!surname) throw new Error("No surname")
        if (!email) throw new Error("No email")
        if (!password) throw new Error("No password")

        if (data?.image) {

            fs.writeFile(path.resolve(__dirname, `./${Date.now()}.png`), data.image, 'base64', function(err) {
                if (err) throw err;
              
              });

              data.image = `${Date.now()}.png`

        }
        const checkUserByEmail = await Users.findOne({ email: email });

        if (checkUserByEmail) throw new Error('This user already exsist');
        const saltRounds = 10;
        const salt = bcrypt.genSaltSync(saltRounds);
        const hashPassword = bcrypt.hashSync(password, salt);
        const newUser = new Users({ ...data, password: hashPassword });
        newUser.save();

        return res.status(201).json({
            status: true,
            message: "User added succesfully"
        });

    } catch (error) {
        return res.status(400).json({
            status: false,
            message: error.message
        });
    }
}

const login = async (req, res) => {
    try {
        const { password, email } = req.body;
        const findUser = await Users.findOne({ email });

        if (!findUser) throw new Error("No such user");

        const isPasswordCorrect = bcrypt.compareSync(password, findUser.password);

        if (!isPasswordCorrect) throw new Error("Password is incorrect");

        const token = jwt.sign({ id: findUser._id }, 'shhhhh', { expiresIn: 300 })

        return res.status(200).json({ token });
    } catch (error) {
        return res.status(400).json({
            status: false,
            message: error.message
        })
    }
}

const resetPassword = async (req, res) => {
    try {
        const token = req.token;
        const hasToken = checkToken(token);

        if (hasToken === "success") {
            const { newPassword, email, currentPassword } = req.body;

            const checkEmail = await Users.findOne({ email })

            if (!checkEmail) {
                throw new Error("No such user")
            } else {
                const checkPassword = bcrypt.compareSync(currentPassword, checkEmail.password);

                if (!checkPassword) {
                    throw new Error("Password is incorrect")
                } else {
                    const saltRounds = 10;
                    const salt = bcrypt.genSaltSync(saltRounds);
                    const newHashPassword = bcrypt.hashSync(newPassword, salt);
                    checkEmail.password = newHashPassword;
                    await checkEmail.save()
                    return res.status(200).json({
                        status: true,
                        message: "User password is changed successfully"
                    })
                }
            }
        }
    } catch (error) {
        return res.status(400).json({
            status: false,
            message: error.message
        })
    }
}

const deleteUser = async (req, res) => {
    try {

        const token = req.token;
        const hasToken = checkToken(token);

        if (hasToken === "success") {
            const userId = req.params.id;

            const findUserById = await Users.findOne({ _id: userId });

            if (!findUserById) throw new Error("No such user");


            await Users.deleteOne({ _id: userId });
            return res.status(200).json({ message: "User is deleted successfully" })
        } else {
            throw new Error(hasToken)
        }


    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
};

const getUserById = async (req, res) => {
    try {
        const token = req.token;

        const hasToken = checkToken(token);

        if (hasToken === "success") {
            const { id } = req.params;
            const checkUserById = await Users.findOne({ _id: id }, {password: 0});

            if (!checkUserById) throw new Error("No such user");

            return res.status(200).json({ user: checkUserById, status: true });
        }

    } catch (error) {
        return res.status(400).json({ message: error.message, status: false })
    }
}
const updateUser = async (req, res) => {
    try {

        const token = req.token;
        const hasToken = checkToken(token);

        if (hasToken === "success") {
            const { id } = req.params;
            const updateUserData = req.body;

            const checkUserById = await Users.findOne({ _id: id });
            if (!checkUserById) throw new Error("No such user");

            await Users.findByIdAndUpdate({ _id: id }, { $set: updateUserData }, { returnOriginal: false });
            return res.status(200).json({ message: "User is successfully updated" })
        } else {
            throw new Error(hasToken);
        }


    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}
export { getAllUsers, createUser, login, deleteUser, updateUser, getUserById, resetPassword };
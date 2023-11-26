import Users from "../Models/UserModel.js";
import { getModule } from "../Helpers/GetRequestModule.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const getAllUsers = async (req, res) => {
    const users = await Users.find();
    return getModule(200, users, res);
}

const createUser = async (req, res) => {
    try {
        const { password, email, name, surname } = req.body;
        const data = req.body

        if (!name) throw new Error("No name");
        if (!surname) throw new Error("No surname")
        if (!email) throw new Error("No email")
        if (!password) throw new Error("No password")

        const checkUserByEmail = await Users.findOne({ email: email });

        if (checkUserByEmail) throw new Error('This user already exsist');
        const saltRounds = 10;
        const salt = bcrypt.genSaltSync(saltRounds);
        const hashPassword = bcrypt.hashSync(password, salt);
        const newUser = new Users({ ...data, password: hashPassword });
        newUser.save();

        return res.status(201).json("User added succesfully");

    } catch (error) {
        return res.status(400).json(error.message);
    }
}

const login = async (req, res) => {
    try {
        const { password, email } = req.body;
        const findUser = await Users.findOne({ email });

        if (!findUser) throw new Error("No such user");

        const isPasswordCorrect = bcrypt.compareSync(password, findUser.password);

        if (!isPasswordCorrect) throw new Error("Password is incorrect");

        const token = jwt.sign({ id: findUser._id }, 'shhhhh');

        return res.status(200).json({ token });
    } catch (error) {
        return res.status(400).json(error.message)
    }
}

const deleteUser = async (req, res) => {
    try {
        const userId = req.params.id;

        const findUserById = await Users.findOne({ _id: userId });

        if (!findUserById) throw new Error("No such user");


        await Users.deleteOne({ _id: userId });
        return res.status(200).json({ message: "User is deleted successfully" })

    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}
export { getAllUsers, createUser, login, deleteUser };
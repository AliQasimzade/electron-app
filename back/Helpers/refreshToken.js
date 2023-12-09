import Users from "../Models/UserModel.js";
import jwt from "jsonwebtoken";

export const generateAccessToken = (user) => {
    return jwt.sign({ id: user.id, username: user.username }, 'shhhhh', { expiresIn: 300 });
};

export const refreshToken = async (req, res) => {
    const refreshToken =  req.body.refreshToken;

    if (!refreshToken) {
        return res.sendStatus(401);
    }

    jwt.verify(refreshToken, 'shhhhh', async (err, user) => {
        if (err) {
            console.log(err.message);
            return res.sendStatus(403);
        }

        const existingUser = await Users.findOne({ _id: user.id });

        console.log(existingUser);
        if (!existingUser) {
            return res.sendStatus(403);
        }

        const accessToken = generateAccessToken(existingUser);

        res.json({ accessToken });
    });
};
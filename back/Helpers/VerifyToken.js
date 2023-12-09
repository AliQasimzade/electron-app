import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized: No token provided' });
    }

    jwt.verify(token.split(" ")[1], 'shhhhh', async (err, decoded) => {
        if (err) {

            return res.status(401).json({ message: 'Unauthorized: Invalid token' });
        }

        next();
    });
};
import express from 'express';
import { getAllUsers, createUser, login, deleteUser, updateUser, getUserById, resetPassword } from '../Controllers/UsersControllers.js';
import { verifyToken } from '../Helpers/VerifyToken.js';
import { refreshToken } from '../Helpers/refreshToken.js';
import { user, log, userDelete, tokenRefresh, passwordReset } from '../Endpoints.js';

const router = express.Router();

router.get(user, verifyToken, getAllUsers);
router.get(`${user}/:id`, verifyToken, getUserById)
router.post(user, createUser);
router.post(log, login);
router.delete(`${userDelete}/:id`, verifyToken, deleteUser);
router.patch(`${user}/:id`, verifyToken, updateUser);
router.post(tokenRefresh, refreshToken)
router.post(passwordReset,verifyToken, resetPassword)
export default router
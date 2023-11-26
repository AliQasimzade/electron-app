import express from 'express';
import { getAllUsers, createUser, login, deleteUser } from '../Controllers/UsersControllers.js';
import { user, log, userDelete } from '../Endpoints.js';

const router = express.Router();

router.get(user, getAllUsers);
router.post(user, createUser);
router.post(log, login);
router.delete(`${userDelete}/:id`, deleteUser);


export default router
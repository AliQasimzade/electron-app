import express from "express";
import { addToBasket } from "../Controllers/BasketControllers.js";
import { verifyToken } from "../Helpers/VerifyToken.js";
import { basket } from "../Endpoints.js";

const router = express.Router();

router.post(`${basket}/:id`, verifyToken, addToBasket);

export default router;

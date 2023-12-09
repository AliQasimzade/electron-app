import express from "express";
import { getAllBooks, createBook, updateBook, deleteBook } from "../Controllers/BooksControllers.js";
import { book } from "../Endpoints.js";
import { verifyToken } from "../Helpers/VerifyToken.js";

const router = express.Router();

router.get(book, verifyToken, getAllBooks);
router.post(book, verifyToken, createBook);
router.patch(`${book}/:id`, verifyToken, updateBook);
router.delete(`${book}/:id`, verifyToken, deleteBook)
export default router;
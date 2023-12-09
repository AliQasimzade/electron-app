import Books from "../Models/BookModel.js";
import { checkToken } from "../Helpers/CheckToken.js";
import { getModule } from "../Helpers/GetRequestModule.js";

const getAllBooks = async (req, res) => {
    try {

        const token = req.token;
        const hasToken = checkToken(token);
        if (hasToken === "success") {
            const books = await Books.find({}, { costPrice: 0 });

            if (!books) throw new Error("No any book");

            return getModule(200, books, res);
        }
        else {
            throw new Error(hasToken);
        }

    } catch (error) {
        return res.status(400).json({ message: error.message, status: false })
    }
}


const createBook = async (req, res) => {
    try {
        const { title, description, costPrice, salePrice, stockCount, authorName, bookImage } = req.body;

        if (!title) throw new Error("No title")
        if (!description) throw new Error("No description")
        if (!costPrice) throw new Error("No cost price")
        if (!salePrice) throw new Error("No salePrice")
        if (!stockCount) throw new Error("No stock count")
        if (!authorName) throw new Error("No author name")
        if (!bookImage) throw new Error("No book image")

        const checkBookName = await Books.findOne({ title })

        if (checkBookName) throw new Error("This book is already exist");

        const newBook = await Books({ title, description, costPrice, salePrice, stockCount, authorName, bookImage });
        newBook.save()
        return res.status(201).json({ message: "Book is created successfully", status: true })

    } catch (error) {
        return res.status(400).json({ message: error.message, status: false })
    }
}

const updateBook = async (req, res) => {
    try {
        const token = req.token;
        const hasToken = checkToken(token);

        if (hasToken === "success") {
            const updateBookData = req.body;
            const { id } = req.params;

            const checkBookByBId = await Books.findOne({ _id: id });

            if (!checkBookByBId) throw new Error("No such book");

            await Books.findOneAndUpdate({ _id: id }, { $set: updateBookData }, { returnOriginal: false });
            return res.status(200).json({ message: "Book is updated successfully", status: true })
        }
    } catch (error) {
        return res.status(400).json({
            message: error.message,
            status: false
        })
    }
}

const deleteBook = async (req, res) => {
    try {
        const token = req.token;
        const hasToken = checkToken(token);

        const { id } = req.params;
        if (hasToken === "success") {
            const checkBookById = await Books.findOne({ _id: id });

            if (!checkBookById) throw new Error("No such book");

            await Books.deleteOne({ _id: id });
            return res.status(200).json({
                message: "Book is deleted successfuly",
                status: true
            })
        }
    } catch (error) {
        return res.status(400).json({
            message: error.message,
            status: false
        })

    }
}


export { getAllBooks, createBook, updateBook, deleteBook }
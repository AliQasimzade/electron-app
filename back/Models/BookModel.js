import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Book = new Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    costPrice: {
        type: Number,
        require: true
    },
    salePrice: {
        type: Number,
        require: true
    },
    stockCount: {
        type: Number,
        require: true
    },
    authorName: {
        type: String,
        require: true
    },
    bookImage: {
        type: String,
        require: true
    }
}, { timestamps: true });

const Books = mongoose.model("books", Book);

export default Books;
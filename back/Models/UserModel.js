import mongoose from "mongoose";

const UserSchema = mongoose.Schema;

const User = new UserSchema({
    name: {
        type: String,
        require: true
    },
    surname: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: false,
        default: null
    },
    image: {
        type: String,
        require: false,
        default: null
    },
    basket:{
         type:Array,
         require: false,
         default: []
    }
}, { timestamps: true })

const Users = mongoose.model("users", User);

export default Users;
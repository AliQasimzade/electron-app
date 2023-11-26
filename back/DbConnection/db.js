import mongoose from "mongoose";
import dotenv from "dotenv";

mongoose.set('strictQuery', true);
dotenv.config();


const ConnectionDb = async () => {
    const db_connection_url = `${process.env.MONGO_DB_CONNECTION_URL}electron-app-db`;

    try {
        await mongoose.connect(db_connection_url);
        console.log("Db is connected");
    } catch (error) {
        console.log("Db is not connected");
    }
}

export default ConnectionDb;
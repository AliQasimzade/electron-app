import express from 'express';
import dotenv from 'dotenv';
import cors from "cors";
import ConnectionDb from './DbConnection/db.js';
import UsersRouter from './Routers/UsersRouters.js'
dotenv.config();

const app = express();
const port = process.env.SERVER_PORT || 3001;

//middlewares
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(UsersRouter)

//call db connection function
ConnectionDb();

//server listening

app.listen(port, () => console.log(`Server listening on ${port}`));

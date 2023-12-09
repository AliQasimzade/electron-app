import express from 'express';
import dotenv from 'dotenv';
import cors from "cors";
import ConnectionDb from './DbConnection/db.js';
import UsersRouter from './Routers/UsersRouters.js'
import BooksRouter from './Routers/BooksRouters.js'
import BasketRouter from './Routers/BasketRouters.js';
import bodyParser from 'body-parser';

dotenv.config();

const app = express();
const port = process.env.SERVER_PORT || 3001;

//middlewares
app.use(cors({ origin: '*' }))
app.use((req, res, next) => {
    const token = req.headers['authorization'];

    if (token) {
        req.token = token
    }
    next()
})
app.use(express.json());
app.use(bodyParser.json());

//services
app.use(UsersRouter);
app.use(BooksRouter);
app.use(BasketRouter);

//call db connection function
ConnectionDb();

//server listening

app.listen(port, () => console.log(`Server listening on ${port}`));

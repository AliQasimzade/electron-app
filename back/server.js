import express from 'express';
import dotenv from 'dotenv';
import cors from "cors";
import ConnectionDb from './DbConnection/db.js';
import UsersRouter from './Routers/UsersRouters.js'
import BooksRouter from './Routers/BooksRouters.js'
import BasketRouter from './Routers/BasketRouters.js';
import bodyParser from 'body-parser';
import path from 'path';
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
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

app.use('/images', express.static(path.join(__dirname, '/Controllers/images')));
app.use(express.json({limit:'500mb'}));

app.use(bodyParser.json({limit:'500mb', type:'application/json'}))
app.use(bodyParser.urlencoded({
    extended: true,
    limit: '500mb'
}));

//services
app.use(UsersRouter);
app.use(BooksRouter);
app.use(BasketRouter);

//call db connection function
ConnectionDb();

//server listening

app.listen(port, () => console.log(`Server listening on ${port}`));

import express from 'express';
import Connection from './database/db.js';
import dotenv from 'dotenv'
import cors from 'cors'
import bodyParser from 'body-parser';

import router from './routes/route.js';

const app = express();


app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
dotenv.config();
const PORT = 8000;

const username = process.env.DB_USERNAME

const password = process.env.DB_PASSWORD

Connection(username, password);


app.use('/', router);


app.listen(PORT, () => console.log(`Server is runnning on Port : ${PORT}`));
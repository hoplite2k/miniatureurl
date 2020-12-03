import express from 'express';
import dotenv from 'dotenv';
import ConnectDB from './config/db.js';
import router from './routes/index.js';
import urlrouter from './routes/url.js';

const app = express();

dotenv.config();

ConnectDB();

app.use(express.json({ extended: false }));

app.use('/', router);
app.use('/url', urlrouter);

app.listen(process.env.PORT, () => { console.log(`Server running on port ${process.env.PORT}`) });
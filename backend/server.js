import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import ConnectDB from './config/db.js';
import redirectrouter from './routes/redirectroute.js';
import urlrouter from './routes/urlroute.js';

const app = express();

dotenv.config();

ConnectDB();

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.use(express.json({ extended: false }));

app.use('/', redirectrouter);
app.use('/url', urlrouter);

app.listen(process.env.PORT, () => { console.log(`Server running on port ${process.env.PORT}`) });
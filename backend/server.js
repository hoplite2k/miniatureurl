import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import path from 'path';
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

const __dirname = path.resolve();
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/frontend/build')));

    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html')));
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => { console.log(`Server running on port ${PORT}`) });
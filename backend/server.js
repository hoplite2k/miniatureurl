import express from 'express';
import dotenv from 'dotenv';
import ConnectDB from './config/db.js';

const app = express();

dotenv.config();

ConnectDB();

app.use(express.json({ extended: false }));

app.listen(process.env.PORT, () => { console.log(`Server running on port ${process.env.PORT}`) });
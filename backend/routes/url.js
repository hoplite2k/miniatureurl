import express from 'express';
const urlrouter = express.Router();
import urlcontroller from '../controllers/urlcontroller.js';

urlrouter.post('/shorten', urlcontroller);

export default urlrouter;
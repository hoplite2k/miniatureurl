import express from 'express';
const redirectrouter = express.Router();
import redirectcontroller from '../controllers/redirectcontroller.js';

redirectrouter.get('/:code', redirectcontroller);

export default redirectrouter;
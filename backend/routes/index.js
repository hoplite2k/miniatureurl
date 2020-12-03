import express from 'express';
const router = express.Router();
import indexcontroller from '../controllers/indexcontroller.js';

router.get('/:code', indexcontroller);

export default router;
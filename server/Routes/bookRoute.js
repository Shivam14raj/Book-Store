import express from 'express'
import { saveBook } from '../controllers/saveBook.js';

const router = express.Router()

// router to save a book 
router.post('/', saveBook); 


export default router; 
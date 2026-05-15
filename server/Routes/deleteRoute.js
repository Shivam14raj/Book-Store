import express from 'express'
import { deleteBook } from '../controllers/deletebook.js';

const router = express.Router()

router.delete('/:id', deleteBook)

export default router; 
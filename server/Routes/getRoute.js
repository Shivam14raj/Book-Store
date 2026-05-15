import express from 'express'
import { getbookbyID, getbooks } from "../controllers/getbook.js";

const router  = express.Router()

router.get('/', getbooks)
router.get('/:id', getbookbyID)

export default router
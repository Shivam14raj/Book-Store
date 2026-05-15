import express from "express"
import { updateBook } from "../controllers/updatebook.js"

const router = express.Router()

router.put('/:id', updateBook);   




export default router
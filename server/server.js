import express from 'express'
import dotenv from 'dotenv'
import {connection} from "./db/db.js"
import { Book } from './models/bookModel.js'
import bookRoute from './Routes/bookRoute.js'
import getRoute from './Routes/getRoute.js'
import deleteRoute from "./Routes/deleteRoute.js"
import updateRouter from "./Routes/updateRoute.js"
import cors from 'cors' 

dotenv.config(); 
const app = express();  
app.use(express.json()); 

// app.use(cors()) // default value : * (allow from all the origin)
app.use(cors({
    origin: 'http://localhost:5173', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    allowedHeaders: ['Content-Type']
}))


// routes 
// book 
app.use('/books', bookRoute)  // create a book 
app.use('/getbook', getRoute) // get book and by also by id 
app.use('/deletebook', deleteRoute)  // delete book
app.use('/updatebook', updateRouter) // update book 

connection();  
const PORT = process.env.PORT || 1010;

app.listen(PORT, ()=>{
    console.log(`app is started at port ${PORT} `)
})  
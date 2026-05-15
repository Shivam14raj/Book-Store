import express from 'express'
import { Book } from "../models/bookModel.js"; 

export const saveBook = async(req, res) =>{
   try {
    const {title, author, publishYear}  = req.body

     if(!title || !author || !publishYear){
        return res.status(500).json({
            success: false, 
            message: "all fields are required"
        })
     }  

     // create a book 
     const book  = await Book.create({
        title, 
        author, 
        publishYear
     })  

     res.status(201).json({
        success:true, 
        message: "Book created successfully",
        data:book
     }) 

   } catch (error) {
     console.log(error)
   } 

}

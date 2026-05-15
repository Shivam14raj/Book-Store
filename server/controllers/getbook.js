import express from 'express'
import { Book } from '../models/bookModel.js'

export const getbooks = async (req, res) =>{
     try {
        const books = Book.find(); 

        res.status(200).json({
            success: true, 
            message: "book found in Database", 
            
        })

     } catch (error) {
        res.status(500).json({
            success: false, 
            message: "Book not found in database"
        })
     }
}

// finding book by id 
export const getbookbyID = async (req, res) =>{
     try {
       
        const {id} = req.params
        const book = Book.findById(id); 

        if(!book){
            return res.status(500).json({
                success: false,
                message: "Book not found",
            })
        } 

        res.status(200).json({
            success: true, 
            message:" book found in database sucessfully"
        })

     } catch (error) {
        res.status(500).json({
            success: false, 
            message: "Book not found in database"
        })
     }
}
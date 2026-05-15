import express from 'express'
import { Book } from '../models/bookModel.js'

export const deleteBook = async (req, res) =>{
    try {
      // 
      const {id} = req.params
      const deleteBook= await Book.findByIdAndDelete(id)

      if(!deleteBook){
        return res.status(500).json({
            success: false,
            message: "Book not found in db"
        })
      } 

      return res.status(200).json({
        success: false,
        message: "Book is deleted successfully"
      }) 
      

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

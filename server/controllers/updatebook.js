import express from 'express'
import { Book } from '../models/bookModel.js'

export const updateBook = async (req, res) =>{
    try {
        const {id} = req.params  
        
        const updatebook = await Book.findByIdAndUpdate(
            id, 
            req.body, 
            {
               new: true, 
               runValidators: true
            } 
        ); 

        if(!updatebook){
            return res.status(500).json({
                success: false, 
                message: "book not found"
            })
        } 

        return res.status(200).json({
            success: true, 
            message: "book modified successsfully", 
            data : updateBook
        })   


    } catch (error) {
        res.status(500).json({
            success: false, 
            message: error.message
        })
    }


}
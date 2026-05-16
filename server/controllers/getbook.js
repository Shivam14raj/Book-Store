import express from "express";
import { Book } from "../models/bookModel.js";

export const getbooks = async (req, res) => {
  try {
    const books = await Book.find();

    res.status(200).json({
      success: true,
      message: "book found in Database",
      count: (await books).length,
      data: books,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Book not found in database",
    });
  }
};

// finding book by id
export const getbookbyID = async (req, res) => {
  try {
    const { id } = req.params

    const book = await Book.findById(id)

    if (!book) {
      return res.status(404).json({
        success: false,
        message: "Book not found",
      })
    }

    return res.status(200).json({
      success: true,
      message: "Book found successfully",
      data: book,
    })

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    })
  }
}

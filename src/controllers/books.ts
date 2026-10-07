 import type { Request, Response } from 'express';
 import Book from '../models/book.js';


export const getBooks = async (req: Request, res: Response) => {
    const books = await Book.find({});
    res.send(books);
};

export const createBook = async (req: Request, res: Response) => {
    const { title, genre, year, tags } = req.body;
    const book = await Book.create({ title, genre, year, tags });
    res.status(201).send(book);
}
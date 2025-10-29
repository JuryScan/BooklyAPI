import req from "express/lib/request.js";
import models from "../models/index.js";

const Book = models.book;

const getAllBooks = async (req, res) => {
    try{
        const books = await Book.findAll();
        if(!books || Book.length == 0){
            return res.status(404).json({message: "Nenhum livro encontrado"});
        } 
        res.status(200).json({message:"Livros encontrados com sucesso", data: books});

    } catch(error){
        res.status(500).json({message: "Erro ao buscar livros", error: error.message});
    }
};

const getBookById = async (req, res) => {
    try{
        const {id} = req.params;
        const book = await Book.findByPk(id);
        if(!book){
            return res.status(404).json({message: "Livro não foi encontrado."});
        }
        res.status(200).json({message:"Livro encontrado com sucesso.", data: book});

    } catch(error){
        res.status(500).json({message: "Erro ao buscar o livro", error: error.message});
    }
};

const createBook = async (req, res) => {
    try{
        const {id, title, description, year} = req.body;
        const {authorId, genderId} = req.query;

        if (!authorId || !genderId){
            return res.satus(400).json({message: "authorId e genderId são obrigatórios."});
        }

        const book = await Book.create({
            id,
            title,
            description,
            year,
            authorId,
            genderId
        });

        res.status(201).json({messa: "Livro criado com sucesso.", data: book});
    } catch(error){
        res.status(500).json({message: "Erro ao criar o Livro", error: error.message});
    }
};

const updateBookById = async (req, res) => {
    try{
        const {id} = req.params;
        const {title, description, year} = req.body;

        const book = await Book.findByPk(id);
        if(!book){
            return res.status(404).json({message: "Livro não encontrado."});
        }

        book.title = title || book.title;
        book.description = description || book.description;
        book.year = year || book.year;
        
        await book.save();

        res.status(200).json({message: "Livro atualizado com sucesso", data: book});

    } catch(error){
        res.status(500).json({message: "Erro ao atualizar o livro", error: error.message});
    }
};

const deleteBookById = async (req, res) => {
    try {const {id} = req.params;

    const book = await Book.findByPk(id);
    if(!book){
        return res.status(404).json({message: "Livro não encontrado"});
    }

    await book.destroy();

    res.status(200).json({message: "Livro deletado com sucesso"});

    } catch(error){
        res.status(500).json({message: "Erro ao deletar o livro", error: error.message});
    }
};


export {getAllBooks, getBookById,createBook, updateBookById, deleteBookById}
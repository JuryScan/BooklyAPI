import { getAllAuthor, getAuthorById, createAuthor, updateAuthorById, deleteAuthorById } from "./author.js";

const author = {getAllAuthor, getAuthorById, createAuthor, updateAuthorById, deleteAuthorById};

import { getAllBooks, getBookById, createBook, updateBookById, deleteBookById} from "./book";

const book = {getAllBooks, getBookById, createBook, updateBookById, deleteBookById};

import { 
    getAllReviews, 
    getReviewsByBookId, 
    getReviewById, 
    getAvgReviewsByBookId, 
    getReviewsByUserId, 
    createReview, 
    updateReviewById, 
    deleteReviewById 
} from "./review.js";

const review = {
    getAllReviews,
    getReviewById,
    getReviewsByBookId,
    getAvgReviewsByBookId,
    getReviewsByUserId,
    createReview,
    updateReviewById,
    deleteReviewById
};

export { review, book, author };

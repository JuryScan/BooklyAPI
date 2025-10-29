import { getAllAuthor, getAuthorById, createAuthor, updateAuthorById, deleteAuthorById } from "./author.js";
import { getAllBooks, getBookById, createBook, updateBookById, deleteBookById} from "./book.js";
import { getAllReviews, getReviewsByBookId, getReviewById, getAvgReviewsByBookId, getReviewsByUserId, createReview, updateReviewById, deleteReviewById 
} from "./review.js";

const book = {
    getAllBooks, 
    getBookById, 
    createBook, 
    updateBookById, 
    deleteBookById
};

const author = {
    getAllAuthor, 
    getAuthorById, 
    createAuthor, 
    updateAuthorById, 
    deleteAuthorById
};

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

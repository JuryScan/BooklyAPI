import { getAllBooks, getBookById, createBook, updateBookById, deleteBookById} from "./book";

const book = {getAllBooks, getBookById, createBook, updateBookById, deleteBookById};

export { book };

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

export { review };
import users from "../defaultUsers.js";
import books from "../defaultBooks.js";
import authors from "../defaultAuthors.js";
import genders from "../defaultGenders.js";
import reviews from "../defaultReviews.js";

import models from "../../models/index.js";
import bcrypt from "bcryptjs";

const populateDb = async() => {
    // Create genders first and store them
    const createdGenders = [];
    for (const genderData of genders) {
        const gender = await models.gender.create(genderData);
        createdGenders.push(gender);
    }

    // Create authors and store them
    const createdAuthors = [];
    for (const authorData of authors) {
        const author = await models.author.create(authorData);
        createdAuthors.push(author);
    }

    // Create books with authorId and genderId
    const createdBooks = [];
    for (let i = 0; i < books.length; i++) {
        const bookData = books[i];
        const book = await models.book.create({
            ...bookData,
            AuthorId: createdAuthors[i % createdAuthors.length]?.id,
            GenderId: createdGenders[i % createdGenders.length]?.id
        });
        createdBooks.push(book);
    }

    // Create users
    const createdUsers = [];
    for (const userData of users) {
        const user = await models.user.create({
            ...userData, 
            password: await bcrypt.hash("123", 10)
        });
        createdUsers.push(user);
    }

    // Create reviews with BookId and UserId
    for (let i = 0; i < reviews.length; i++) {
        const reviewData = reviews[i];
        await models.review.create({
            ...reviewData,
            BookId: createdBooks[i % createdBooks.length]?.id,
            UserId: createdUsers[i % createdUsers.length]?.id
        });
    }
}

export default populateDb;
import express from "express"
import { book } from "../controller/index.js";

const router = express.Router();

router.get("/", book.getAllBooks);
router.get("/:id", book.getBookById);

router.post("/", book.createBook);
router.put("/", book.updateBookById);
router.delete("/", book.deleteBookById);

export default router
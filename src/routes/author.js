import express from "express"
import { author } from "../controller/index.js";

const router = express.Router();

router.get("/", author.getAllAuthor);
router.get("/", author.getAuthorById);

router.post("/", author.createAuthor);
router.put("/", author.updateAuthorById);
router.delete("/", author.deleteAuthorById);

export default router
import express from "express"
import { author } from "../controller/index.js";

const router = express.Router();

router.get("/", author.getAllAuthor);
router.get("/:id", author.getAuthorById);

router.post("/", author.createAuthor);
router.put("/:id", author.updateAuthorById);
router.delete("/:id", author.deleteAuthorById);

export default router
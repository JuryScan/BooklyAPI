import express from "express"
import { user } from "../controller/index.js";

const router = express.Router();

router.get("/", user.getAllUsers);
router.get("/:id", user.getUserById);

router.post("/", user.createUser);
router.put("/:id", user.updateUserById);
router.delete("/:id", user.deleteUserById);

export default router
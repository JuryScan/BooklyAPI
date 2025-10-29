import express from "express"
import { user } from "../controller/index.js";

const router = express.Router();

router.get("/", user.getAllUser);
router.get("/", user.getUserById);

router.post("/", user.createUser);
router.put("/", user.updadeUserById);
router.delete("/", user.deleteUserById);

export default router
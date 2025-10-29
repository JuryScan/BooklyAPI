import { Router } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import "dotenv/config";
import { v4 as uuidv4 } from "uuid";
import models from "../models/index.js";

const router = Router();

router.post("/logout", async (req, res) => {
    try {
        const { refreshToken } = req.body;

        if (!refreshToken) {
            return res.status(400).json({ message: "Refresh token is required" });
        }

        const tokenRecord = await models.RefreshToken.findOne({ where: { token: refreshToken } });
        
        if (!tokenRecord) {
            return res.status(400).json({ message: "Invalid refresh token" });
        }
        await models.RefreshToken.destroy({ where: { token: refreshToken } });

        return res.status(200).json({ message: "Logged out successfully" });
    } catch (error) {
        console.error("Logout error:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
});

export default router;
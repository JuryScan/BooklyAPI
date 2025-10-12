import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import app from "./src/app.js";

dotenv.config();

const PORT = process.env.PORT || 3000;
const server = express();

server.use(cors());
server.use(express.json());
server.use("/api", app);

server.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
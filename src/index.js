import express from "express";
//import routes from "./routes/index.js";
import "dotenv/config";
import cors from "cors";

const app = express();
const port = process.env.PORT ?? 3000;


app.use(express.json());


app.get("/", (req, res) =>{
    res.send("API biblioteca.");
});

app.listen(port, () => {
    console.log(`Servidor ouvindo na porta ${port}...`);
});

export default app;
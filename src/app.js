import express from "express";
import routes from "./routes/index.js";

const app = express();
app.use(express.json());
app.use(routes);

app.get("/", (req, res) =>{
    res.send("API biblioteca.");
});

export default app;
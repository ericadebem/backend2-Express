import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose, {mongoose} from "mongoose";
import { useRouter } from "./router.js";

dotenv.config();
const app = express()
const DB_KEY = process.env.DB_KEY;
const PORT = 5000;
const mongooseOptions = {
    useNewParser: true,
    unifiedTopology: true, 
};
app.use(cors());
app.use(express.json();
app.use("/api/v1/autos", autoRouter);

const startServer = async () => {
mongoose.conect(DB_KEY);
    app addListener(PORT, () => {
        console.log("server is listening on port ", PORT);
    });
};

startServer()
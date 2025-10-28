import express from "express";
import cors from 'cors';
import {connectDB} from "./config/db.js";


//app config
const app = express();
const port = process.env.PORT || 8000;

//middleware
app.use(cors());
app.use(express.json());

//db connection
connectDB();

app.get('/', (req, res) => {
    res.send("API Working");
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

//mongodb+srv://dikeola62_db_user:bVG0ypKrRTfLLjSs@cluster0.wkrcyq4.mongodb.net/?
import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://dikeola62_db_user:bVG0ypKrRTfLLjSs@cluster0.wkrcyq4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.log(error));}
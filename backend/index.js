import express from "express";
import "dotenv/config";
import cors from "cors";
import mongoose, { Schema, model } from "mongoose";
import path from 'path';
import fs from 'fs'
import { errorMiddleware } from "./middleware/error.js";
import productRouter from "./routes/products.js";
import userRouter from "./routes/users.js";
import authRouter from "./routes/auth.js";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
const publicKey =fs.readFileSync(path.join(path.resolve(),'./public.key'))

const app = express();

//Mongoose

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect(process.env.DB_URL);
}

//Middleware

app.use(cors())
    .use(express.json())
    .use(cookieParser())
    .use('/auth', authRouter)
    // .use((req, res, next) => {
    //     try {
    //         const token = req.cookies.token;
    //         const decoded = jwt.verify(token, publicKey);
    //         if (decoded.email) {
    //             next()
    //         } else {
    //             res.status(401).json({ success: false, message: "Please login to access" });
    //         }
    //     }
    //     catch (err) {
    //         res.status(401).json({ success: false, message: "Please login to access" });
    //     }
    // })
    .use('/products', productRouter)
    .use('/users', userRouter)

//listening

app.listen(process.env.PORT, () => {
    console.log(`Server is working at http://localhost:${process.env.PORT}`);
})
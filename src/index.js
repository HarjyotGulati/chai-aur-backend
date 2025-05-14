import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db/index.js';

dotenv.config();

connectDB();

const app = express();
const port = process.env.PORT;
app.listen(port,()=>{
    console.log(`Applicatoin is running at PORT:${port}`);
})
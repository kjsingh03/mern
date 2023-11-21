import express from 'express';
import path from 'path'
import fs from 'fs'
import cors from 'cors'

const data =fs.readFileSync(path.join(path.resolve(),'./data.json'),"utf-8");

const app=express();

app
    .use(cors());

    
app.get('/products',(req,res)=>{
    res.json(data)
})

app.listen(5000,()=>{
    console.log(`Server is working at http://localhost:5000/products`);
})
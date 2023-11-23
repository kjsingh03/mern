import ApiFeatures from '../utils/apiFeatures.js';
import { Product } from '../models/products.js';
import { Category } from '../models/categories.js';
import { User } from '../models/users.js';
import jwt from 'jsonwebtoken'
import fs from 'fs'
import path from 'path'
const publicKey =fs.readFileSync(path.join(path.resolve(),'../backend/public.key'))

export const createProduct = async (req, res) => {
    const product = new Product(req.body);
    try {
        const token = req.cookies.token;
        const decoded = jwt.verify(token, publicKey);
        if (decoded.email) {
            const user = await User.findOne({"email":decoded.email});
            product.user = user._id;
            product.save()
                .then(() => res.status(201).json({ "success": true, message: "Product added", product }))
                .catch((err) => res.status(404).json({ "success": false, "message": err.message }));

        } else {
            res.status(401).json({ success: false, message: "Please login to access" });
        }
    }
    catch (err) {
        const token = req.cookies.token;
        const decoded = jwt.verify(token, publicKey);
        res.status(401).json({ success: false, message: "failed to get user" });
    }

}

export const getAllProducts = async (req, res, next) => {
    try {
        const apiFeatures = new ApiFeatures(Product.find(), req.query).search().filter().sort().pagination();
        const products = await apiFeatures.query;
        // apiFeatures.query
        if(!products)
            return res.status(404).json({ success: false, message: "Product not Found" })
        res.status(200).json({ "success": true, products });
    } catch {
        res.status(404).json({ success: false, message: "No products to display" })
    }
}

export const getProduct = async (req, res, next) => {
    try {
        const product = await Product.findOne({ _id: req.params.id });
        if(!product)
            return res.status(404).json({ success: false, message: "Product not Found" })
        res.status(200).json({ success: true, product });
    }
    catch (err) {
        res.status(404).json({ success: false, message: "Product not Found" })
    }
}

export const updateProduct = async (req, res, next) => {
    try {
        const product = await Product.findOneAndUpdate({ _id: req.params.id }, req.body, { returnDocument: "after" });
        if(!product)
            return res.status(404).json({ success: false, message: "Product not Found" })
        res.status(200).json({ success: true, message: "product updated successfully", product });
    }
    catch (err) {
        res.status(404).json({ success: false, message: "Product not Found" })
    }
}

export const removeProduct = async (req, res, next) => {
    try {
        const product = await Product.findOneAndDelete({ _id: req.params.id });
        if(!product)
            return res.status(404).json({ success: false, message: "Product not Found" })
        res.status(200).json({ success: true, message: "product deleted successfully", product });
    }
    catch (err) {
        res.status(404).json({ success: false, message: "Product not Found" })
    }
}


// export const replaceProduct = async (req, res) => {
//     let product = await Product.findOne({_id:req.params.id});
//     if(!product){
//         return res.status(404).json({
//             success:false,
//             message:"Product not found
//         })
//     }
//     product = await Product.findOneAndReplace({_id:req.params.id}, req.body, { returnDocument: 'after' });
//     res.status(201).json({success:true,product});
// }

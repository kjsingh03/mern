import Mongoose, { Schema } from "mongoose";
import { User } from "./users.js";

const productSchema = new Schema({
    user: { type: Mongoose.Schema.ObjectId, ref: User, required: true },
    name: { type: String, required: [true, "Please enter name"] },
    description: { type: String, required: [true, "please enter description"] },
    price: { type: Number, required: [true, "please enter price"], maxLength: [8, "Too high price"], },
    discount: { type: Number, default: 0, max: [99.99, "discount limit breached"], },
    rating: { type: Number, default: 0, min: [0, "too low rating"], max: [5, "too high rating"], },
    stock: { type: Number, required: [true, "Enter number of stock"] },
    brand: { type: String, required: [true, "Enter Brand"] },
    category: { required: [true, "Enter category"], type: String },
    thumbnail: { type: String },
    images: [{ type: String, required: true }],
    section: { required: [true, "Enter section"], type: String, enum: ["Men", "Women", "Kids", "Electronics"] },
    noOfReviews: [
        {
            name: { required: true, type: String },
            rating: { required: true, type: Number },
            comment: { required: true, type: String },
        },
    ],
    createdAt: { type: Date, default: Date.now },
});

export const Product = Mongoose.model("Product", productSchema);

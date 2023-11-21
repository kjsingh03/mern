import Mongoose, { Schema } from "mongoose";
import { User } from "./users.js";

const categorySchema = new Schema({
    name: { type: Mongoose.Schema.Types.ObjectId, ref : 'Product', unique: true },
    product: [{ type: Mongoose.Schema.Types.ObjectId, ref : 'Product', unique: true }],
});

export const Category = Mongoose.model("Category", categorySchema);

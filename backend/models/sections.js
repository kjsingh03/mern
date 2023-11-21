import Mongoose, { Schema } from "mongoose";
import { User } from "./users.js";

const sectionSchema = new Schema({
    name: { type: Mongoose.Schema.Types.ObjectId, ref : 'Category', unique: true },
    category: [{ type: Mongoose.Schema.Types.ObjectId, ref : 'Category', unique: true }],
});

export const Section = Mongoose.model("Section", sectionSchema);

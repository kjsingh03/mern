import { Schema, model } from 'mongoose';
import validator from 'validator';

export const userSchema = new Schema({
    name: { type: String, required: [true, 'Please enter your Name'], minLength: [4, "Name should have more than 4 characters"], maxLength: [30, "Name cannot exceed more than 30 characters"] },
    email: { type: String, required: [true, "Please enter your Email"], unique: [true, "User already exists"], validate: [validator.isEmail, "Please enter a valid Email"] },
    password: { type: String, required: [true, "Please enter your Password"], minLength: [8, 'Password too short'] },
    avatar: { public_id: { type: String }, url: { type: String } },
    role: { type: String, default: "user" },
    token: { type: String},
    resetPasswordToken: String,
    resetPasswordExpire: String
})

export const User = model('User', userSchema);
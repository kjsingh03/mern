import bcrypt from "bcrypt";
import { User } from "../models/users.js";
import jwt from 'jsonwebtoken'
import path from 'path'
import fs from 'fs'

const privateKey = fs.readFileSync(path.join(path.resolve(), './private.key'), "utf-8")

export const createUser = (req, res) => {
    try {
        const user = new User(req.body);
        user.save()
            .then(() => {
                res.status(200).json({ success: "Account created successfully", user });
                bcrypt.hash(user.password, 10, (err, hash) => {
                    user.password = hash;
                    user.save();
                })
            })
            .catch((err) => res.status(404).json({ success: false, message: err.message }))
        
    }

    catch (err) {
        res.status(404).json({ success: false, message: err.message })
    }
};

export const getUser = async (req, res) => {
    try {
        const email = req.body.email;
        const password =req.body.password;

        if (!email || !password) {
            return res.status(400).json({ success: false, message: "Enter Valid Details" })
        }

        const user = await User.findOne({ email: email }).select('+password');
        if (!user)
            return res.status(404).json({ success: false, message: "Invalid Credentails" });

        bcrypt.compare(password, user.password, function (err, result) {
            if (result) {
                jwt.sign({ email: req.body.email }, privateKey, { algorithm: 'RS256' }, (err, token) => {
                    user.token = token;
                    user.save()
                        .then(() => res.status(200).cookie("token", token, { expires: new Date(Date.now() + process.env.COOKIE_EXP * 24 * 60 * 60 * 1000), httpOnly: true }).json({ success: true, message: "User logged in successfully" }))
                        .catch((err) => res.status(404).json({ success: false, message: err }))
                })
            } else
                res.status(404).json({ success: false, message: "Invalid Password", error: err });
        });

    }
    catch (err) {
        res.status(404).json({ success: false, message: "User authentication failed" });
    }
};

export const logout = async (req, res, next) => {
    try {
        res.cookie("token", null, { expires: new Date(Date.now()), httpOnly: true })
        res.status(200).json({ success: true, message: "Logged out successfully" });
    } catch (err) {
        res.status(404).json({ success: false, message: "Failed to log out" });
    }
}
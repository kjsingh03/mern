import { User } from '../models/users.js';

export const getAllUsers = async (req, res) => {
    const users = await User.find();
    res.status(200).json(users);
}

export const updateUser = async (req, res) => {
    const id = req.body.id;
    const user = await User.findOneAndUpdate(id, req.body, { returnDocument: 'after' });
    res.status(200).json(user);
}
export const removeUser = async (req, res) => {
    try {
        const user = await User.findOneAndDelete({ _id: req.params.id });
        res.status(200).json({ "success": true, "message": "user deleted successfully",user })
    } catch (err) {
        res.status(404).json({ "success": false, "message": "User not found" })
    }
}

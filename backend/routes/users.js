import {Router} from 'express';
import { getAllUsers,removeUser,updateUser } from '../controller/users.js';

const userRouter=Router();

userRouter
    .get('/',getAllUsers)
    .put('/:id',updateUser)
    .delete('/:id',removeUser);

export default userRouter;
import {Router} from 'express';
import { getUser,createUser,logout } from '../controller/auth.js';

const authRouter=Router();

authRouter
    .post('/signup',createUser)
    .post('/login',getUser)
    .delete('/logout',logout)

export default authRouter;
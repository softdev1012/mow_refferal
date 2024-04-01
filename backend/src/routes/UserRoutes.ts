import express, { Router } from 'express';
import * as UserController from '../controllers';
import { verifyToken } from '../middleware/authMiddleware';

const userrouter: Router = express.Router();

userrouter.post('/',verifyToken, UserController.createUser);
userrouter.get('/', verifyToken, UserController.getAllUsers);
userrouter.get('/:id', verifyToken, UserController.getUser);
userrouter.put('/:id', verifyToken, UserController.updateUser);
userrouter.delete('/:id', verifyToken, UserController.deleteUser);

export default userrouter;

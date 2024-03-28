import express, { Router } from 'express';
import * as UserController from '../controllers';
import { verifyToken } from '../middleware/authMiddleware';

const userrouter: Router = express.Router();

userrouter.post('/',verifyToken, UserController.createUser);
userrouter.get('/', UserController.getAllUsers);
userrouter.get('/:id', UserController.getUser);
userrouter.put('/:id', UserController.updateUser);
userrouter.delete('/:id', UserController.deleteUser);

export default userrouter;

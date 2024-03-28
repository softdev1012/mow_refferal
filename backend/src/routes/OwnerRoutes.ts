import express, { Router } from 'express';
import * as ownerController from '../controllers';

const ownerrouter: Router = express.Router();

ownerrouter.post('/', ownerController.createOwner);
ownerrouter.get('/', ownerController.getAllOwners);
ownerrouter.get('/:id', ownerController.getOwner);
ownerrouter.put('/:id', ownerController.updateOwner);
ownerrouter.delete('/:id', ownerController.deleteOwner);

export default ownerrouter;

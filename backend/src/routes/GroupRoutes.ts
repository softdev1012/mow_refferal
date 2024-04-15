import express, { Router } from 'express';
import * as groupController from '../controllers';
import { verifyToken } from '../middleware/authMiddleware';

const grouprouter: Router = express.Router();

grouprouter.get('/total', groupController.totalGroup);
grouprouter.get('/recent/count', groupController.recentGroupTotal);
grouprouter.post('/',verifyToken, groupController.createGroup);
grouprouter.get('/', groupController.getAllGroups);
grouprouter.get('/:id', groupController.getGroup);
grouprouter.put('/:id', groupController.updateGroup);
grouprouter.delete('/:id', groupController.deleteGroup);
grouprouter.post('/join', verifyToken, groupController.addUserToGroup);
grouprouter.get('/:id/members', groupController.getGroupMembers);


export default grouprouter;

import express, { Router } from 'express';
import * as referralController from '../controllers/ReferralController';
import { verifyToken } from '../middleware/authMiddleware';

const referralrouter: Router = express.Router();

referralrouter.post('/', verifyToken, referralController.createReferral);
referralrouter.get('/', referralController.getAllReferrals);
referralrouter.get('/:id', verifyToken, referralController.getReferral);
referralrouter.put('/:id', verifyToken, referralController.updateReferral);
referralrouter.delete('/:id', verifyToken, referralController.deleteReferral);

export default referralrouter;

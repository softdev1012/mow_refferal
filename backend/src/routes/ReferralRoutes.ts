import express, { Router } from 'express';
import * as referralController from '../controllers/ReferralController';

const referralrouter: Router = express.Router();

referralrouter.post('/', referralController.createReferral);
referralrouter.get('/', referralController.getAllReferrals);
referralrouter.get('/:id', referralController.getReferral);
referralrouter.put('/:id', referralController.updateReferral);
referralrouter.delete('/:id', referralController.deleteReferral);

export default referralrouter;

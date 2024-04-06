import mongoose from 'mongoose';
import { IReferral } from '../types/referral';

const referralSchema = new mongoose.Schema({
  groupname: String,
  fullname: String,
  phone: String,
  from: String,
  value: String,
  payStatus: Boolean,
});

const Referral = mongoose.model<IReferral>('Referral', referralSchema);

export default Referral;

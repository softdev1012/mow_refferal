import mongoose from 'mongoose';
import { IUser } from '../types/user';
import { Roles } from '../enums/role.enums';


const userSchema = new mongoose.Schema({
  
  name: {
    type: String,
    required: true,
  },
  businessname: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  street: {
    type: String,
    required: true,
  },
  zipcode: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  isEmailVerified: {  
    type: Boolean,
    default: false,
  },
  password: {
    type: String,
    required: true,
  },
  roles: {
    type: [String],
    enum: Roles,
    required: true,
    default: Roles.DEFAULT,
  },
  referrals: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Referral'
  }]
});

const User = mongoose.model<IUser>('User', userSchema);

export default User;

import mongoose from 'mongoose';
import { IUser } from '../types/user';
import { Roles } from '../enums/role.enums';


const userSchema = new mongoose.Schema({
  
  name: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
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
  phone: {
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
  businessName: {
    type: String,
    required: true,
  },
  bussinessPhone: {
    type: String,
    required: true,
  },
  businessEmail: {
    type: String,
    required: true,
  },
  businessWebsite: {
    type: String,
    required: true,
  },
  googleLink: {
    type: String,
    required: true,
  },
  profilePhoto: {
    type: String,
    required: true,
  },
  businessLogo: {
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

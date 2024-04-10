import mongoose, { Document } from "mongoose";

export interface IUserGroup extends Document {
  user_id: string; // User ID
  group_id: string; // Group ID
}

const userGroupSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  group_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Group'
  },
  seat: String,
  clanStatus: {  
    type: Boolean,
    default: false,
  },
}, { timestamps: true });

const UserGroup = mongoose.model<IUserGroup>('UserGroup', userGroupSchema);

export default UserGroup;

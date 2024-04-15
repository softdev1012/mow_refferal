import mongoose, { Document } from "mongoose";
import { IUserGroup } from "../types/usergroup";
import Group from "./Group";


const userGroupSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  group_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Group'
  },
  seat: {
    type: String,
    default: "test"
  },
  clanStatus: {  
    type: Boolean,
    default: false,
  },
}, { timestamps: true });

// Post-save hook to update the counterMember field of the corresponding Group
userGroupSchema.post<IUserGroup>('save', async function(doc) {
  try {
    const count = await this.model('UserGroup').countDocuments({ group_id: doc.group_id, user_id: { $ne: null }});
    await Group.findByIdAndUpdate(doc.group_id, { counterMember: count });
  } catch (error) {
    console.error("Error updating counterMember:", error);
  }
});

userGroupSchema.post<IUserGroup>('save', async function(doc) {
  try {
    const count = await this.model('UserGroup').countDocuments({ group_id: doc.group_id});
    await Group.findByIdAndUpdate(doc.group_id, { groupSize: count });
  } catch (error) {
    console.error("Error updating counterMember:", error);
  }
});

const UserGroup = mongoose.model<IUserGroup>('UserGroup', userGroupSchema);
export default UserGroup;

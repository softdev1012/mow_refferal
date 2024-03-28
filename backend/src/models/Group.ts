import mongoose from 'mongoose';
import { IGroup } from '../types/group';

const groupSchema = new mongoose.Schema({   
  name: String,
  location: String,
  owner: String,
  profileStatus: Boolean,
  countermember: String,
  meetings: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Meeting'
  }]
});

const Group = mongoose.model<IGroup>('Group', groupSchema);

export default Group;

// types/usergroup.ts

import { Document } from 'mongoose';

export interface IUserGroup extends Document {
  group_id: string; // Group ID
  user_id: string; // User ID
}

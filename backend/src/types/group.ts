import mongoose, { Document } from "mongoose";

export interface IGroup extends Document {
    _id: mongoose.Types.ObjectId;
    name: string;
    location: string;
    owner: string;  
    profileStatus: boolean;
    counterMember: Number;
    meetings: mongoose.Types.ObjectId[];
}
  
import mongoose from 'mongoose';

const meetingSchema = new mongoose.Schema({
  meetingname: String,
  group: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Group'
  },
  groupowner: String,
  meetingtime: String,
  meetinglink: String,
  meetingStatus: Boolean
});

const Meeting = mongoose.model('Meeting', meetingSchema);

export default Meeting;

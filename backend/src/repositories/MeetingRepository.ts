import { Meeting } from "../models";


class MeetingRepository {
    async create(meetingData:any) {
        const meeting = new Meeting(meetingData);
        return meeting.save();
    }

    async findAll() {
        return Meeting.find();
    }

    async findById(id:any) {
        return Meeting.findById(id);
    }

    async update(id:any, meetingData:any) {      
        const updatedMeetingData = { ...meetingData };
        delete updatedMeetingData._id;
      
        return Meeting.findByIdAndUpdate(id, updatedMeetingData, { new: true });
    }

    async delete(id:any) {
        return Meeting.findByIdAndDelete(id);
    }
}

export default new MeetingRepository();

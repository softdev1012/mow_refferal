import { UserGroup } from "../models";
import { IUserGroup } from "../types/usergroup";

class UserGroupRepository {
    async create(usergroupData: Partial<IUserGroup>) {
        const usergroup = new UserGroup(usergroupData);
        return usergroup.save();
    }

    async findAll() {
        return UserGroup.find();
    }

    async findById(id:string) {
        return UserGroup.findById(id);
    }

    async update(id:string, usergroupData:any) {
        const updatedUserGroupData = { ...usergroupData };
        delete updatedUserGroupData._id;
        return UserGroup.findByIdAndUpdate(id, updatedUserGroupData, { new: true });
    }

    async delete(id:string) {
        return UserGroup.findByIdAndDelete(id);
    }

    async deleteByUserAndGroup(userId:string, groupId:string) {
        return UserGroup.deleteOne({ user_id: userId, group_id: groupId });
    }

    async findByUserAndGroup(userId:string, groupId:string) {
        return UserGroup.findOne({ user_id: userId, group_id: groupId });
    }
    async findByUser(userId:string) {
        return UserGroup.find({ user_id: userId}).populate('user_id').populate('group_id');
    }
    async findByGroup(groupId:string) {
        return UserGroup.find({group_id: groupId }).populate('user_id').populate('group_id');
    }
}

export default new UserGroupRepository();

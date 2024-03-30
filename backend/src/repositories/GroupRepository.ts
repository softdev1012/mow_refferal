import { Group } from "../models";
import { IGroup } from "../types/group";


class GroupRepository {
    async create(groupData: IGroup): Promise<Partial<IGroup>> {
        try {
            const group =await Group.create({...groupData});
            const id =(await Group.findOne({name:groupData.name}))?._id;
           // Log savedGroup instead of group
            return {...group,...(id&&{_id:id})};
        } catch (error) {
            console.error("Error saving group:", error);
            throw error; // Rethrow the error to handle it at a higher level
        }
    }

    async findAll() {
        return Group.find().populate('meetings');
    }

    async findById(id:string) {
        return Group.findById(id).populate('meetings');
    }

    async update(id:string, groupData:any) {      
        const updatedGroupData = { ...groupData };
        delete updatedGroupData._id;
      
        return Group.findByIdAndUpdate(id, updatedGroupData, { new: true });
    }

    async delete(id:string) {
        return Group.findByIdAndDelete(id);
    }
}

export default new GroupRepository();
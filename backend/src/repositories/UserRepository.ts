
import { User } from '../models';
import { IUser } from '../types/user';

class UserRepository {
    async create(userData: IUser): Promise<IUser> {
        const user = new User(userData);
        return user.save();
    }

    async findAll(): Promise<IUser[]> {
        return User.find().populate('referrals');;
    }

    async findById(id: string): Promise<IUser | null> {
        return User.findById(id).populate('referrals');;
    }

    async update(id: string, userData: Partial<IUser>): Promise<IUser | null> {      
        const updatedUserData = { ...userData };
        delete updatedUserData._id;
      
        return User.findByIdAndUpdate(id, updatedUserData, { new: true });
      }

    async delete(id: string): Promise<IUser | null> {
      const result = await User.findByIdAndDelete(id);
      if (!result) {
          return null;
      }
      return result as unknown as IUser;
    }
}

export default new UserRepository();

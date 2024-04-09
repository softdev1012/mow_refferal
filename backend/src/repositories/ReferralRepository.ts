
import Referral from '../models/Referral';
import { IReferral } from '../types/referral';

class ReferralRepository {
    async create(referralData: IReferral): Promise<IReferral> {
        const referral = new Referral(referralData);
        return referral.save();
    }

    async findAll(): Promise<IReferral[]> {
        return Referral.find().populate('group').populate('sender').populate('receiver');
    }

    async findById(id: string): Promise<IReferral | null> {
        return Referral.findById(id);
    }

    async update(id: string, referralData: Partial<IReferral>): Promise<IReferral | null> {      
        const updatedReferralData = { ...referralData };
        delete updatedReferralData._id;
      
        return Referral.findByIdAndUpdate(id, updatedReferralData, { new: true });
      }

    async delete(id: string): Promise<IReferral | null> {
      const result = await Referral.findByIdAndDelete(id);
      if (!result) {
          return null;
      }
      return result as unknown as IReferral;
    }
}

export default new ReferralRepository();

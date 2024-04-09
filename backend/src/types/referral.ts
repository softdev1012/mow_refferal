export interface IReferral extends Document {
    _id: string | null;
    group: string | null;
    sender: string;
    receiver: string;
    status: string;
    desc: string;
    price: number;
    paystatus: boolean;
}
  
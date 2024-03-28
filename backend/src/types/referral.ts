export interface IReferral extends Document {
    _id: string | null;
    groupname: string;
    fullname: string;
    phone: string;
    from: string;
    value: string;
    paystatus: boolean;
}
  
export interface IUser extends Document {
    _id: string | null;
    name : string;
    clan: string;
    clanStatus: boolean;
    profileStatus: boolean;
    email: string;
    isEmailVerified: boolean;
    password: string;
    roles: string;
    businessname:string;
    city:string;
    street:string;
    zipcode:string;
    firstname:string;
    lastname:string;
}
  
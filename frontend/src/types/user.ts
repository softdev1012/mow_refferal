export enum UserModalStatus {
    OPEN = "open",
    EDIT = "edit",
    CLOSE = "close",
    REMOVE = "remove",
  }
  
  export interface IModalStatusWithId {
    modalStatus: UserModalStatus;
    currentId: string | undefined;
  }
  
  export interface IUser {
    _id: string | null;
    name: string;
    clan: string;
    clanStatus: boolean;
    profileStatus: boolean;
  }
  
  export interface IBaseInputFieldProps {
    type: string;
    _id: string;
    placeholder: string;
    autoFocus: boolean;
    required: boolean;
    label: string;
    register: any;
    error: string | undefined;
  }
  
  export interface IBaseTextarea {
    _id: string;
    placeholder: string;
    row: number;
    label: string;
    required: boolean;
    register: any;
    error: string | undefined;
  }
  
  export interface IBaseToogleProps {
    register: any;
  }
  
  export interface IUserItemProps {
    user: IUser;
  }
  
  export interface IPaginatedUsers {
    data: IUser[];
    pageNumber: number | null;
  }
  
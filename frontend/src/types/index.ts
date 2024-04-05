
export enum ModalStatus {
  OPEN = "open",
  EDIT = "edit",
  CLOSE = "close",
  REMOVE = "remove",
}

export interface IModalStatusWithId {
  modalStatus: ModalStatus;
  currentId: string | undefined;
}

export interface ITask {
  _id: string | null;
  title: string;
  desc: string;
  taskStatus: boolean;
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

export interface IBaseSelectFieldProps {
  _id: string;
  placeholder?: string;
  autoFocus?: boolean;
  required?: boolean;
  label?: string;
  register?: any;
  options?: any[];
  error?: string | undefined;
  readonly?: boolean
  value?: string
  onChange?: (value: string) => void
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
  status: string;
}

export interface ITaskItemProps {
  task: ITask;
}

export interface IPaginatedTasks {
  data: ITask[];
  pageNumber: number | null;
}


export interface IImageUpload {
  _id: string;
  register?: any;
  autoFocus?: boolean;
  required?: boolean;
  logo?: string
}
;
import { IPaginatedUsers, IUser } from '../types/user'; 
import instance from '../utils/axiosInstance';

const baseUrl = 'http://localhost:8001/api/users/';
const tokenHeader =  {
  Authorization: `Bearer ${localStorage.getItem("site")}` // Include the token in the request headers
}

export const fetchUsers = async (page: number, limit: number = 10): Promise<IPaginatedUsers> => {
  const response = await instance.get(baseUrl, {params: { page, limit }});
  return response.data;
};

export const createUser = async (newUser: IUser) => {
  const response = await instance.post(baseUrl, newUser);
  return response.data;
};

export const register = async (newUser: IUser) => {
  console.log(newUser);
  try{
  const response = await instance.post("http://localhost:8001/account/signup", newUser);
  return response.data;
  }catch(err){
    console.log("err",err);
  }
};
export const signin = async (User: {email:string,password:string}) => {
  console.log(User);
  try{
  const response = await instance.post("http://localhost:8001/account/login", User);
  return response.data;
  }catch(err){
    console.log("err",err);
  }
};
export const fetchMe = async () => {
  try{
  const response = await instance.get("http://localhost:8001/account/me", {headers: tokenHeader});
  return response.data;
  }catch(err){
    console.log("err",err);
  }
};

export const getUser = async (_id: string) => {
  const response = await instance.get(`${baseUrl}${_id}`, {headers: tokenHeader});
  return response.data;
};

export const updateUser = async ({_id, updatedUser}: {_id: string, updatedUser: IUser}) => {
  const response = await instance.put(`${baseUrl}${_id}`, updatedUser, {headers: tokenHeader});
  return response.data;
};

export const deleteUser = async (_id: string) => {
  const response = await instance.delete(`${baseUrl}${_id}`, {headers: tokenHeader});
  return response.data;
};
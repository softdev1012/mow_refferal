import axios from 'axios';
import { IPaginatedOwners, IOwner } from '../types/owner'; 
import { SERVER_URL } from '../utils/constants';

const baseUrl = SERVER_URL + 'api/owners/';

export const fetchOwners = async (page: number, limit: number = 10): Promise<IPaginatedOwners> => {
  const response = await axios.get(baseUrl, {params: { page, limit }});
  return response.data;
};

export const createOwner = async (newOwner: IOwner) => {
  const response = await axios.post(baseUrl, newOwner);
  return response.data;
};

export const getOwner = async (_id: string) => {
  const response = await axios.get(`${baseUrl}${_id}`);
  return response.data;
};

export const updateOwner = async ({_id, updatedOwner}: {_id: string, updatedOwner: IOwner}) => {
  const response = await axios.put(`${baseUrl}${_id}`, updatedOwner);
  return response.data;
};

export const deleteOwner = async (_id: string) => {
  const response = await axios.delete(`${baseUrl}${_id}`);
  return response.data;
};

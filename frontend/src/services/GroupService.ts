
import { IPaginatedGroups, IGroup } from '../types/group'; 
import instance from '../utils/axiosInstance';

const baseUrl = 'http://localhost:8001/api/groups/';

export const fetchGroups = async (page: number, limit: number = 10): Promise<IPaginatedGroups> => {
  const response = await instance.get(baseUrl, {params: { page, limit }});
  return response.data;
};

export const createGroup = async (newGroup: IGroup) => {
  const response = await instance.post(baseUrl, newGroup);
  return response.data;
};

export const getGroup = async (_id: string) => {
  const response = await instance.get(`${baseUrl}${_id}`);
  return response.data;
};

export const updateGroup = async ({_id, updatedGroup}: {_id: string, updatedGroup: IGroup}) => {
  const response = await instance.put(`${baseUrl}${_id}`, updatedGroup);
  return response.data;
};

export const deleteGroup = async (_id: string) => {
  const response = await instance.delete(`${baseUrl}${_id}`);
  return response.data;
};

export const fetchTotals = async () => {
  const url = baseUrl + "total/";
  const response = await instance.get(url);
  return response.data;
};

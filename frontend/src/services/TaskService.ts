
import { IPaginatedTasks, ITask } from '../types'; 
import instance from '../utils/axiosInstance';

const baseUrl = 'http://localhost:8001/api/tasks/';

export const fetchTasks = async (page: number, limit: number = 10): Promise<IPaginatedTasks> => {
  const response = await instance.get(baseUrl, {params: { page, limit }});
  return response.data;
};

export const createTask = async (newTask: ITask) => {
  const response = await instance.post(baseUrl, newTask);
  return response.data;
};

export const getTask = async (_id: string) => {
  const response = await instance.get(`${baseUrl}${_id}`);
  return response.data;
};

export const updateTask = async ({_id, updatedTask}: {_id: string, updatedTask: ITask}) => {
  const response = await instance.put(`${baseUrl}${_id}`, updatedTask);
  return response.data;
};

export const deleteTask = async (_id: string) => {
  const response = await instance.delete(`${baseUrl}${_id}`);
  return response.data;
};

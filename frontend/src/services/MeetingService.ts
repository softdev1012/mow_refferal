import { IPaginatedMeetings, IMeeting } from '../types/meeting'; 
import instance from '../utils/axiosInstance';

const baseUrl = 'http://localhost:8001/api/meetings/';

export const fetchMeetings = async (page: number, limit: number = 10): Promise<IPaginatedMeetings> => {
  const response = await instance.get(baseUrl, {params: { page, limit }});
  return response.data;
};

export const createMeeting = async (newMeeting: IMeeting) => {
  const response = await instance.post(baseUrl, newMeeting);
  return response.data;
};

export const getMeeting = async (_id: string) => {
  const response = await instance.get(`${baseUrl}${_id}`);
  return response.data;
};

export const updateMeeting = async ({_id, updatedMeeting}: {_id: string, updatedMeeting: IMeeting}) => {
  const response = await instance.put(`${baseUrl}${_id}`, updatedMeeting);
  return response.data;
};

export const deleteMeeting = async (_id: string) => {
  const response = await instance.delete(`${baseUrl}${_id}`);
  return response.data;
};
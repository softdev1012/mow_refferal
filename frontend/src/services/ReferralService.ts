import { IPaginatedReferrals, IReferral } from '../types/referral'; 
import instance from '../utils/axiosInstance';

const baseUrl = 'http://localhost:8001/api/referrals/';
const tokenHeader =  {
  Authorization: `Bearer ${localStorage.getItem("site")}` // Include the token in the request headers
}

export const fetchReferrals = async (page: number, limit: number = 10): Promise<IPaginatedReferrals> => {
  const response = await instance.get(baseUrl, {params: { page, limit }});
  return response.data;
};

export const createReferral = async (newReferral: IReferral) => {
  const response = await instance.post(baseUrl, newReferral, {headers: tokenHeader});
  return response.data;
};

export const getReferral = async (_id: string) => {
  const response = await instance.get(`${baseUrl}${_id}`, {headers: tokenHeader});
  return response.data;
};

export const updateReferral = async ({_id, updatedReferral}: {_id: string, updatedReferral: IReferral}) => {
  const response = await instance.put(`${baseUrl}${_id}`, updatedReferral, {headers: tokenHeader});
  return response.data;
};

export const deleteReferral = async (_id: string) => {
  const response = await instance.delete(`${baseUrl}${_id}`, {headers: tokenHeader});
  return response.data;
};

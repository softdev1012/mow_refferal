import { IPaginatedReferrals, IReferral } from '../types/referral'; 
import instance from '../utils/axiosInstance';
import { SERVER_URL } from '../utils/constants';

const baseUrl = SERVER_URL + 'api/referrals/';
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

export const fetchReferralTotals = async () => {
  const url = baseUrl + "total/";
  const response = await instance.get(url);
  return response.data;
};
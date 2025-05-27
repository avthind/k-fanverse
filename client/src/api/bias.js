import axios from 'axios';

export const getBiasProfile = async (userId) => {
  const res = await axios.get(`/api/users/${userId}/bias`);
  return res.data;
};

export const saveBiasProfile = async (userId, biases) => {
  const res = await axios.post(`/api/users/${userId}/bias`, { biases });
  return res.data;
};

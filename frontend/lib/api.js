import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001/api';

export const api = axios.create({
  baseURL: API_URL,
});

export const issueCertificate = async (formData) => {
  const response = await api.post('/certificates/issue', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};

export const verifyCertificate = async (certificateId) => {
  const response = await api.get(`/certificates/verify/${certificateId}`);
  return response.data;
};

export const revokeCertificate = async (certificateId) => {
  const response = await api.post(`/certificates/revoke/${certificateId}`);
  return response.data;
};

export const getCertificates = async () => {
  const response = await api.get('/certificates');
  return response.data;
};

export const verifyFile = async (certificateId, file) => {
  const formData = new FormData();
  formData.append('certificate', file);
  
  const response = await api.post(`/certificates/verify-file/${certificateId}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};

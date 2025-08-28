import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getTours = async () => {
  try {
    const response = await api.get('/tours');
    return response.data;
  } catch (error) {
    console.error('Error fetching tours:', error);
    return [];
  }
};

export const getTourBySlug = async (slug: string) => {
  try {
    const response = await api.get(`/tours/${slug}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching tour with slug ${slug}:`, error);
    return null;
  }
};

export const submitTourRequest = async (data: unknown) => {
  try {
    const response = await api.post('/requests', data);
    return response.data;
  } catch (error) {
    console.error('Error submitting tour request:', error);
    throw error;
  }
};

export default api;

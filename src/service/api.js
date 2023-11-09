import axios from 'axios';

const baseURL = process.env.REACT_APP_API_ENDPOINT || 'http://localhost:3001';
const api = axios.create({
  baseURL,
});

export const getAllProducts = async () => {
  try {
    const response = await api.get('/api/products');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getProduct = async (id) => {
  try {
    const response = await api.get(`/api/products/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getProductStockAndPrice = async (sku) => {
  try {
    const response = await api.get(`/api/stock-price/${sku}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default api;

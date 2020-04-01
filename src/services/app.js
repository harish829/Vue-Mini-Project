/* eslint-disable linebreak-style */
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'content-type': 'application/json',
  },
});

export default {
  getList() {
    return apiClient.get('/groceriesList');
  },
  postItem(item) {
    return apiClient.post('/groceriesList', {
      name: item.name,
      price: item.price,
      quantity: item.quantity,
    });
  },
};

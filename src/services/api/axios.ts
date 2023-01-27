import { getToken } from 'auth/token';
import axios from 'axios';

const axiosClient = axios.create({
  headers: {
    Authorization: `${getToken()}`,
  },
  baseURL: 'https://unsplash-yi42.onrender.com',
});

const axiosEdit = axios.create({
  headers: {
    'Content-Type': 'multipart/form-data',
    Authorization: `${getToken()}`,
  },
  baseURL: 'https://unsplash-yi42.onrender.com',
  data: {},
});

const axiosToken = axios.create({
  method: 'GET',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    Authorization: `Bearer ${getToken()}`,
  },
  baseURL: 'https://unsplash-yi42.onrender.com',
});

export { axiosClient, axiosToken, axiosEdit };

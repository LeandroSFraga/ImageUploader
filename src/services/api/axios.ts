import { getToken } from 'auth/token';
import axios from 'axios';

const BASE_URL = 'https://unsplash-yi42.onrender.com';

const axiosClient = axios.create({
  headers: {
    Authorization: `${getToken()}`,
  },
  baseURL: BASE_URL,
});

const axiosEdit = axios.create({
  headers: {
    'Content-Type': 'multipart/form-data',
    Authorization: `${getToken()}`,
  },
  baseURL: BASE_URL,
  data: {},
});

const axiosToken = axios.create({
  method: 'GET',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    Authorization: `Bearer ${getToken()}`,
  },
  baseURL: BASE_URL,
});

export { axiosClient, axiosToken, axiosEdit };

import { getToken } from 'auth/token';
import axios from 'axios';

const axiosClient = axios.create({
  headers: {
    Authorization: getToken(),
  },
  baseURL: 'https://unsplash-yi42.onrender.com',
});

export default axiosClient;

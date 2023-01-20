import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://unsplash-yi42.onrender.com',
});

export default axiosClient;

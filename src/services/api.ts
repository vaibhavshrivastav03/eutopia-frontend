import axios from 'axios';

const api = axios.create({
  baseURL: 'https://backend.eutopiatech.ng/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
import axios from 'axios';

const caxios = axios.create({
  baseURL:
    process.env.NODE_ENV === 'production'
      ? 'https://shorecrabs.site/api'
      : process.env.NODE_ENV === 'development'
      ? 'http://lvh.me:3000/api'
      : 'http://localhost:5000',
  withCredentials: true,
});

export default caxios;

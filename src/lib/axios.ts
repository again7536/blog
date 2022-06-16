import axios from 'axios';

const caxios = axios.create({
  baseURL:
    process.env.NODE_ENV === 'production'
      ? 'https://shorecrabs.site/api'
      : 'http://lvh.me:3000/api',
  withCredentials: true,
});

export default caxios;

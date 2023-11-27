import axios from 'axios';

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com', // JSONPlaceholder API endpoint
});

export default api;
// services/api.js
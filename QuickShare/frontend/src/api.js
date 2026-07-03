import axios from 'axios';

const api = axios.create({ baseURL: 'http://localhost:8080/api' });

export const shareText = (text) => api.post('/share', { text });
export const retrieveText = (code) => api.get(`/retrieve/${code}`);

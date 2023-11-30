import axios from "axios";

const endPoint = import.meta.env.VITE_BASE_URL || 'http://localhost:3001/';

let authToken = localStorage.getItem('token') ? localStorage.getItem('token') : null;

export const api = axios.create({
    baseURL: endPoint + 'api',
    headers: {
        Authorization: `Bearer ${authToken}`,
        Accept: "application/json",
        "Content-Type": "application/json",
        

    },
});


api.interceptors.request.use(
    config => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);
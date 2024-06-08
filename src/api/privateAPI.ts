
import axios from 'axios';
import AuthSlice, { refreshAuthToken } from '../store/slices/AuthSlice';
import { store } from '../store/Store';

const privateApi = axios.create({
    baseURL: process.env.REACT_APP_API_ENDPOINT,
});

privateApi.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('accessToken');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

privateApi.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        if (error.response && error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            await store.dispatch(refreshAuthToken());
            const token = localStorage.getItem('token');
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
            return privateApi.request(originalRequest);
        }
        return Promise.reject(error);
    }
);

export default privateApi;

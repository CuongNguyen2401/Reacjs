

import { User, UserRequest } from '../Model/User';
import { Token } from '../Model/Token';
import axios, { AxiosError } from "axios";
import privateApi from './privateAPI';
import { ApiResponse } from './../Model/APIResponse';
import publicApi from './publicAPI';

interface BackendError {
    code: number;
    message: string;
}

export const createNewUser = async (user: UserRequest): Promise<ApiResponse<User>> => {
    try {
        const response = await publicApi.post<ApiResponse<User>>('/api/v1/users', user);

        return response.data;

    } catch (error) {
        const axiosError = error as AxiosError<BackendError>;
        if (axiosError.response && axiosError.response.data) {
            const backendError = axiosError.response.data;
            console.error(`Error Code: ${backendError.code}, Message: ${backendError.message}`);

            throw new Error(backendError.message);
        } else {
            console.error('An unexpected error occurred:', error);
            throw new Error('An unexpected error occurred, please try again later.');
        }
    }
}

export const authenticate = async (username: string, password: string): Promise<ApiResponse<Token>> => {
    try {
        const response = await publicApi.post('/api/v1/auth/token', { username, password });
        return response.data;
    } catch (error) {
        const axiosError = error as AxiosError<BackendError>;
        if (axiosError.response && axiosError.response.data) {
            const backendError = axiosError.response.data;
            console.error(`Error Code: ${backendError.code}, Message: ${backendError.message}`);
            throw new Error(backendError.message);
        } else {
            console.error('An unexpected error occurred:', error);
            throw new Error('An unexpected error occurred, please try again later.');
        }
    }
}

export const refreshAuthTokenApi = async (refreshToken: string): Promise<ApiResponse<Token>> => {
    try {
        const response = await privateApi.post<ApiResponse<Token>>('/api/v1/auth/refresh', { refreshToken });
        return response.data;
    } catch (error) {
        const axiosError = error as AxiosError<BackendError>;
        if (axiosError.response && axiosError.response.data) {
            const backendError = axiosError.response.data;
            console.error(`Error Code: ${backendError.code}, Message: ${backendError.message}`);
            throw new Error(backendError.message);
        } else {
            console.error('An unexpected error occurred:', error);
            throw new Error('An unexpected error occurred, please try again later.');
        }
    }
}

export const fetchUserInfo = async (accessToken: string) => {

    try {
        const response = await publicApi.get('/api/v1/users/myInfo', {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });

        return response.data;
    } catch (error) {
        console.error('Error fetching user info:', error);
        throw error;
    }


};

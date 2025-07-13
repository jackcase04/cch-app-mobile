import axios from 'axios';
import { API_URL } from '@env';

const api_url = API_URL;

export const loginUser = async (username, password) => {
    try {
        const response = await axios.post(`${api_url}/auth/login`, {
            username,
            password,
        });

        return {
            success: true,
            data: response.data,
            message: 'Login successful',
        };
    } catch (error) {
        return {
            success: false,
            data: null,
            message: error.response?.data?.message || 'Login failed. Please check your credentials.',
        };
    }
};

export const signupUser = async (full_name, username, password) => {

    try {
        const response = await axios.post(`${api_url}/auth/signup`, {
            full_name,
            username,
            password,
        });

        return {
            success: true,
            data: response.data,
            message: 'Signup successful',
        };
    } catch (error) {
        const backendMessage =
            typeof error.response?.data === 'string'
                ? error.response.data
                : error.response?.data?.message || 'Signup failed';

        return {
            success: false,
            data: null,
            message: backendMessage,
        };
    }
};

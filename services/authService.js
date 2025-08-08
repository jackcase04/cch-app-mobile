import axios from 'axios';
import { api_url, api_key } from './urlService';

export const getUser = async (username) => {
    try {
        const response = await axios.get(`${api_url}/users/me`, {
            params: {
                fullname: username,
            }, 
            headers: {
                  'X-API-Key': api_key,
                  'Content-Type': 'application/json'
            }
        });

        return {
            success: true,
            data: response.data,
            message: 'Getting user success',
        };
    } catch (error) {
        const backendMessage = error.response?.data?.message || 'Getting user failed';

        return {
            success: false,
            data: null,
            message: backendMessage,
        };
    }
}

export const loginUser = async (username, password, expopushtoken) => {

    try {

        const response = await axios.post(`${api_url}/auth/login`, {
            username,
            password,
            expopushtoken,
        }, {
            headers: {
                  'X-API-Key': api_key,
                  'Content-Type': 'application/json'
              }
        });

        return {
            success: true,
            data: response.data,
            message: 'Login successful',
        };
    } catch (error) {
        const backendMessage = error.response?.data?.message || 'Login failed';

        return {
            success: false,
            data: null,
            message: backendMessage,
        };
    }
};

export const signupUser = async (full_name, username, password, expopushtoken) => {

    try {
        console.log("from signup user: " + expopushtoken)

        const response = await axios.post(`${api_url}/auth/signup`, {
            full_name,
            username,
            password,
            expopushtoken
        }, {
            headers: {
                  'X-API-Key': api_key,
                  'Content-Type': 'application/json'
              }
        });

        return {
            success: true,
            data: response.data,
            message: 'Signup successful',
        };
    } catch (error) {
        const backendMessage = error.response?.data?.message || 'Signup failed';

        return {
            
            success: false,
            data: null,
            message: backendMessage,
        };
    }
};

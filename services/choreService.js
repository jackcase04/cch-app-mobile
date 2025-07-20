// services/choreService.js
import axios from 'axios';
import { API_URL } from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';

const api_url = API_URL;

export const getChores = async (userName, date) => {
    try {
        const jwt = await AsyncStorage.getItem('JWT');
        
        const response = await axios.get(`${api_url}/chores/${userName}/date/${date}`, {
            headers: {
                ...(jwt && { Authorization: `Bearer ${jwt}` })
            }
        });

        return {
            success: true,
            data: response.data,
            message: 'Chores fetched successfully',
        };
    } catch (error) {
        const backendMessage = error.response?.data?.message || 'Failed to fetch chores';

        return {
            success: false,
            data: null,
            message: backendMessage,
        };
    }
};

export const getNames = async () => {
    try {
        const response = await axios.get(`${api_url}/names`);

        return {
            success: true,
            data: response.data,
            message: 'Names fetched successfully',
        };
    } catch (error) {
        const backendMessage = error.response?.data?.message || 'Failed to fetch names';

        return {
            success: false,
            data: null,
            message: backendMessage,
        };
    }
};
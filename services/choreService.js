import axios from 'axios';
import { API_URL } from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';

const api_url = API_URL;

export const getChores = async (userName, date) => {
    try {
        const jwt = await AsyncStorage.getItem('token');
        
        const response = await axios.get(`${api_url}/chores`, {
            params: {
                name: userName,
                date: date
            },
            headers: {
                'Authorization': `Bearer ${jwt}`,
                'Content-Type': 'application/json',
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
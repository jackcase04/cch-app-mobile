import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { api_url, api_key } from './urlService';

export const putReminder = async (time) => {
    try {
        const jwt = await AsyncStorage.getItem('token');
        
        const response = await axios.put(`${api_url}/users/reminder`, 
            {},
            {
                params: {
                    time: time
                },
                headers: {
                    'X-API-Key': api_key,
                    'Content-Type': 'application/json'
                }

            }
        );

        return {
            success: true,
            data: response.data,
            message: 'Reminder updated successfully',
        };
    } catch (error) {

        const backendMessage = error.response?.data?.error || 'Failed to update reminder';

        return {
            success: false,
            data: null,
            message: backendMessage,
        };
    }
};

export const putLogout = async () => {
    try {
        const username = await AsyncStorage.getItem('username')
        
        const response = await axios.put(`${api_url}/users/logout`, 
            {},
            {
                params: {
                    username: username
                },
                headers: {
                    'X-API-Key': api_key,
                    'Content-Type': 'application/json'
                }
            }
        );

        return {
            success: true,
            data: response.data,
            message: 'Logged out successfully',
        };
    } catch (error) {

        const backendMessage = error.response?.data?.error || 'Failed to logout user';

        return {
            success: false,
            data: null,
            message: backendMessage,
        };
    }
};
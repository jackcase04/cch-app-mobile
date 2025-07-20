import axios from 'axios';
import { API_URL } from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';

const api_url = API_URL;

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
                    'Authorization': `Bearer ${jwt}`,
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
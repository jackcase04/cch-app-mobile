import axios from 'axios';
import { api_url, api_key } from './urlService';

export const getNames = async () => {
    try {
        const response = await axios.get(`${api_url}/names`, {
            headers: {
                  'X-API-Key': api_key,
                  'Content-Type': 'application/json'
            }
        });

        return {
            success: true,
            data: response.data,
            message: 'Names fetched successfully',
        };
    } catch (error) {
        const backendMessage = error.response?.data?.error || 'Failed to fetch names';

        return {
            success: false,
            data: null,
            message: backendMessage,
        };
    }
};
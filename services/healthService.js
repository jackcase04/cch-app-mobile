import axios from 'axios';
import { API_URL } from '@env';

const api_url = API_URL;

export const getHealth = async () => {
    try {
        const response = await axios.get(`${api_url}/health`);

        return {
            success: true
        };
    } catch (error) {
        return {
            success: false,
        };
    }
};
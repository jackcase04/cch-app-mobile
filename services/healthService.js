import axios from 'axios';
import { api_url } from './urlService';

export const getHealth = async () => {
    try {
        const response = await axios.get(`${api_url}/health/`);

        return {
            success: true
        };
    } catch (error) {
        return {
            success: false,
        };
    }
};
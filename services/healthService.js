import axios from 'axios';

const api_url = process.env.PROD_API_URL;

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
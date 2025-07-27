import axios from 'axios';

const api_url = process.env.PROD_API_URL;

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
import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_KEY, API_URL } from '@env';

const api_key = API_KEY;

const useFetch = (endpoint) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: `${API_URL}${endpoint}`,
        headers: {
            'X-API-Key': api_key
        }
    };

    const fetchData = async () => {
        setIsLoading(true);
        try {
            const response = await axios.request(options);
            setData(response.data);
            setIsLoading(false);
        } catch (error) {
            setError(error);
            alert(`Error: ${error.message}`);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return { data, isLoading, error};
};

export default useFetch;
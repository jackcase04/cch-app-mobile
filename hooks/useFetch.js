import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '@env';

const api_url = API_URL;

const useFetch = (endpoint) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: `${api_url}${endpoint}`,
    };

    const fetchData = async () => {
        setIsLoading(true);
        try {
            const response = await axios.request(options);
            setData(response.data);
            setIsLoading(false);
        } catch (error) { 
            setError(error);
            alert(`Error from use fetch: ${error.message}`);
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
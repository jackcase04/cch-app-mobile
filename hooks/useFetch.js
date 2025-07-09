import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '@env';

const api_url = API_URL;

const useFetch = (endpoint, method = 'GET', body = null, headers = {}) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await axios({
                    method,
                    url: `${api_url}${endpoint}`,
                    ...(method !== 'GET' && { data: body }),
                    headers: method === 'GET'
                        ? headers
                        : { 'Content-Type': 'application/json', ...headers }
                });
                setData(response.data);
            } catch (err) {
                setError(err);
                alert(`Error from useFetch: ${err.message}`);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [endpoint, method, body]);

    return { data, isLoading, error };
};

export default useFetch;

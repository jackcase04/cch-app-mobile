import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';

const api_url = API_URL;

const useFetch = (endpoint, method = 'GET', body = null, headers = {}) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    


    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);

            const jwt = await AsyncStorage.getItem('JWT');
            const requestHeaders = {};
            if (jwt) {
                const requestHeaders = {
    ...headers, // Include any passed headers
    ...(jwt && { Authorization: `Bearer ${jwt}` }) // Only add auth if JWT exists
};
            }

            try {
                const response = await axios({
                    method,
                    url: `${API_URL}${endpoint}`,
                    ...(body && { data: body }),
                    headers: requestHeaders
                });
                console.log(response)
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

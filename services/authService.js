import axios from 'axios';

const api_url = process.env.PROD_API_URL;

export const loginUser = async (username, password, expopushtoken) => {

    try {

        const response = await axios.post(`${api_url}/auth/login`, {
            username,
            password,
            expopushtoken,
        });

        return {
            success: true,
            data: response.data,
            message: 'Login successful',
        };
    } catch (error) {
        const backendMessage = error.response?.data?.message || 'Login failed';

        return {
            success: false,
            data: null,
            message: backendMessage,
        };
    }
};

export const signupUser = async (full_name, username, password, expopushtoken) => {

    try {
        console.log("from signup user: " + expopushtoken)

        const response = await axios.post(`${api_url}/auth/signup`, {
            full_name,
            username,
            password,
            expopushtoken
        });

        return {
            success: true,
            data: response.data,
            message: 'Signup successful',
        };
    } catch (error) {
        const backendMessage = error.response?.data?.message || 'Signup failed';

        return {
            
            success: false,
            data: null,
            message: backendMessage,
        };
    }
};

import { useState, useEffect, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { loginUser, signupUser } from '../services/authService';
import { putLogout } from '../services/reminderService';
import { Alert } from 'react-native';

// This hook is used to manage a user's login
// setting a state variable to this hook allows the user to log in,
// and be redirected to the login screen if they are not logged in,
// and store the users name in the local storage

export const useAuth = () => {
    const [userName, setUserName] = useState('');
    const [isLoadingAuth, setIsLoadingAuth] = useState(true);
    const [error, setError] = useState(null);
    const [logStatus, setLogStatus] = useState('');
    const [loginError, setLoginError] = useState('');

    const handleLogin = async (inputUser, inputPass, pushToken) => {
        setIsLoadingAuth(true);
        try {
            const result = await loginUser(inputUser, inputPass, pushToken);
            
            if (result.success) {
                console.log("Login successful!");
                
                // Store auth data
                await AsyncStorage.setItem('fullname', result.data.fullname);
                await AsyncStorage.setItem('username', result.data.username);
                await AsyncStorage.setItem('token', result.data.token);
                
                setUserName(result.data.fullname);
                setLoginError('')
            } else if (result.message == "Invalid username or password") {
                console.log("Login failed:", result.message);
                setLoginError(result.message);
            } else {
                console.log("Login failed:", result.message);
            }
        } catch (error) {
            console.error("Login error:", error);
            Alert.alert("Login error", error.message || "An unexpected error occurred")
        } finally {
            setIsLoadingAuth(false);
        }
    };

    const handleSignup = async (tempName, inputUser, inputPass, pushToken) => {
        setIsLoadingAuth(true);
        try {
            const result = await signupUser(tempName, inputUser, inputPass, pushToken);
            
            if (result.success) {
                console.log("Signup successful!");
                
                // Store auth data
                await AsyncStorage.setItem('fullname', result.data.fullname);
                await AsyncStorage.setItem('username', result.data.username);
                await AsyncStorage.setItem('token', result.data.token);
                
                setUserName(result.data.fullname);
            } else {
                console.log("Signup failed:", result.message);
            }
        } catch (error) {
            console.error("Signup error:", error);
        } finally {
            setIsLoadingAuth(false);
        }
    };

    // handles logout
    const handleLogout = useCallback(async () => {
        try {
            await putLogout()
            await AsyncStorage.clear();
            
            setUserName('');
            setLogStatus('')
            setError(null);
        } catch (error) {
            console.error('Error during logout:', error);
            setError('Failed to logout. Please try again.');
        }
    }, []);

    // function to initialize auth (get username if not already stored)
    const initializeAuth = useCallback(async () => {
        try {
            const storedName = await AsyncStorage.getItem("fullname");
            
            if (storedName) {
                setUserName(storedName);
                console.log('Logged in as:', storedName);
            } else {
                console.log('No name in Async');
                setLogStatus('');
            }
        } catch (error) {
            console.error('Error during auth initialization:', error);
            setError('Failed to initialize authentication');
        } finally {
            setIsLoadingAuth(false);
        }
    }, []);

    // initialization time
    useEffect(() => {
        const timer = setTimeout(() => {
            initializeAuth();
        }, 100);

        return () => clearTimeout(timer);
    }, [initializeAuth]);

    return {
        userName,
        setUserName,
        handleLogout,
        logStatus,
        setLogStatus,
        isLoadingAuth,
        handleSignup,
        handleLogin,
        loginError
    };
};
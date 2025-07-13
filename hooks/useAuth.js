import { useState, useEffect, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import * as Notifications from 'expo-notifications';

// This hook is used to manage a user's login
// setting a state variable to this hook allows the user to log in,
// and be redirected to the login screen if they are not logged in,
// and store the users name in the local storage

export const useAuth = () => {
    // const router = useRouter();
    const [userName, setUserName] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    // function to clear user data on logout
    const clearUserData = useCallback(async () => {
        try {
            await AsyncStorage.clear();
            // await Notifications.cancelAllScheduledNotificationsAsync();
            setUserName('');
            setError(null);
        } catch (error) {
            console.error('Error clearing user data:', error);
            setError('Failed to clear user data');
            throw error;
        }
    }, []);

    // handles logout
    const handleLogout = useCallback(async () => {
        try {
            await clearUserData();
            console.log('Successfully logged out');
        } catch (error) {
            console.error('Error during logout:', error);
            setError('Failed to logout. Please try again.');
        }
    }, [clearUserData]);

    // function to initialize auth (get username if not already stored)
    const initializeAuth = useCallback(async () => {
        try {
            const storedName = await AsyncStorage.getItem("fullname");
            
            if (storedName) {
                setUserName(storedName);
                console.log('Logged in as:', storedName);
            } else {
                console.log('No name in Async');
            }
        } catch (error) {
            console.error('Error during auth initialization:', error);
            setError('Failed to initialize authentication');
        } finally {
            setIsLoading(false);
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
        isLoading,
        error,
        clearError: () => setError(null)
    };
};
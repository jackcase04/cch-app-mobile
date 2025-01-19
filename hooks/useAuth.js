import { useState, useEffect, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import * as Notifications from 'expo-notifications';

export const useAuth = (users) => {
    const router = useRouter();
    const [userName, setUserName] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const navigateToLogin = useCallback(() => {
        router.push('/login/login_screen');
    }, [router]);

    const clearUserData = useCallback(async () => {
        try {
            await AsyncStorage.clear();
            await Notifications.cancelAllScheduledNotificationsAsync();
            setUserName('');
            setError(null);
        } catch (error) {
            console.error('Error clearing user data:', error);
            setError('Failed to clear user data');
            throw error;
        }
    }, []);

    const handleLogout = useCallback(async () => {
        try {
            await clearUserData();
            console.log('Successfully logged out');
            navigateToLogin();
        } catch (error) {
            console.error('Error during logout:', error);
            setError('Failed to logout. Please try again.');
        }
    }, [clearUserData, navigateToLogin]);

    const initializeAuth = useCallback(async () => {
        try {
            const storedName = await AsyncStorage.getItem("name");
            
            if (storedName) {
                setUserName(storedName);
                console.log('Logged in as:', storedName);
                return;
            }

            if (users?.choice) {
                setUserName(users.choice);
                await AsyncStorage.setItem("name", users.choice);
                console.log('Logged in as:', users.choice);
                return;
            }

            navigateToLogin();
        } catch (error) {
            console.error('Error during auth initialization:', error);
            setError('Failed to initialize authentication');
            navigateToLogin();
        } finally {
            setIsLoading(false);
        }
    }, [users?.choice, navigateToLogin]);

    useEffect(() => {
        const timer = setTimeout(() => {
            initializeAuth();
        }, 100);

        return () => clearTimeout(timer);
    }, [initializeAuth]);

    return {
        userName,
        handleLogout,
        isLoading,
        error,
        clearError: () => setError(null)
    };
};
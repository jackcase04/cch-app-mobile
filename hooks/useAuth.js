import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import * as Notifications from 'expo-notifications';

export const useAuth = (users) => {
    const router = useRouter();
    const [userName, setUserName] = useState("");
    const [initialized, setInitialized] = useState(false);

    // Waits for the app to initialize
    useEffect(() => {
        const timer = setTimeout(() => {
            setInitialized(true);
        }, 100);
    
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const checkIfLoggedIn = async () => {
            try {
                const name = await AsyncStorage.getItem('name');
                // If there is a value in async
                if (name) {
                    setUserName(name);
                // If there is no value in async
                } else {
                    // if first time logging in
                    if (initialized && !users.choice) {
                        router.push(`/login/login_screen`);
                    // if rerouting
                    } else if (initialized && users.choice) {
                        setUserName(users.choice);
                        await AsyncStorage.setItem('name', users.choice);
                    }
                }
            } catch (error) {
                console.error('Error retrieving name:', error);
            }
        }
        checkIfLoggedIn();
    }, [initialized, users.choice]);

    const handleLogout = async () => {
        // Clear async storage, local variable, and users.choice
        // Then reroute to login screen and reset all those
        try {
            await AsyncStorage.clear();
            await Notifications.cancelAllScheduledNotificationsAsync();
            setUserName("");

            router.push(`/login/login_screen`);
        } catch (error) {
            console.error('Error logging out:', error);
        }
    };

    return { userName, handleLogout };
}
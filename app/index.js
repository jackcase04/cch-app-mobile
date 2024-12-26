import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native';
import { Welcome } from '../components';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = () => {
    const [initialized, setInitialized] = useState(false);
    const router = useRouter();
    const users = useLocalSearchParams();
    const [userName, setUserName] = useState("");

    // Clear async storage
    const clearAsyncStorage = async () => {
        try {
            await AsyncStorage.clear();
        } catch(error) {
            console.error('Error clearing async storage', error);
        }
    }

    // clearAsyncStorage();

    // This state checks if the app has been initialized
    useEffect(() => {
        const timer = setTimeout(() => {
            setInitialized(true);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    // Once initialized, check if the user is logged in, if so get the user's name
    useEffect(() => {
        const checkIfLoggedIn = async () => {
            try {
                const choice = await AsyncStorage.getItem('choice');
                if (choice) {
                    setUserName(choice);
                } else {
                    if (initialized) {
                        router.push(`/login/login_screen`);
                    }
                    setUserName(users.choice);
                    await AsyncStorage.setItem('choice', users.choice);
                }
            } catch(error) {
                console.error('Error checking if logged in', error);
            }
        }
        checkIfLoggedIn();
    }, [initialized, users.choice]);

    if (!userName) {
        return null;
    }

    return (
    // Main menu screen
        <SafeAreaView style={{ flex: 1 }}>
            <Stack.Screen
                options={{
                    headerTitle: "",
                    headerShown: false,
                    gestureEnabled: false
                }}
            />
            <Welcome
                userName={userName}
            />
        </SafeAreaView>
    )
}

export default Home;
import React, { useEffect, useState } from 'react';
import { Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { Welcome } from '../components';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = () => {
    const [initialized, setInitialized] = useState(false);
    const router = useRouter();
    const users = useLocalSearchParams();
    const [userName, setUserName] = useState("");

    // clear async storage
    const clearAsyncStorage = async () => {
            await AsyncStorage.clear();
    }

    //clearAsyncStorage();

    const handleLogout = async () => {
        // Clear async storage, local variable, and users.choice
        // Then reroute to login screen and reset all those
        await AsyncStorage.clear();
        setUserName("");

        router.push(`/login/login_screen`);
    };

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
            const choice = await AsyncStorage.getItem('choice');
            // If there is a value in async
            if (choice) {
                setUserName(choice);
            // If there is no value in async
            } else {
                // if first time logging in
                if (initialized && !users.choice) {
                    router.push(`/login/login_screen`);
                    setUserName(users.choice);
                    await AsyncStorage.setItem('choice', users.choice);
                // if rerouting from handleLogout
                } else if (initialized && users.choice) {
                    setUserName(users.choice);
                    await AsyncStorage.setItem('choice', users.choice);
                }
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
                    headerRight: () => (
                        <TouchableOpacity
                            onPress={handleLogout}
                        >
                            <Text>Logout</Text>
                        </TouchableOpacity>
                    ),
                    headerLeft: () => (
                        <TouchableOpacity>
                            <Text>menu</Text>
                        </TouchableOpacity>
                    ),
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
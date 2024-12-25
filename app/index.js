import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { Login, Welcome } from '../components';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';

const Home = () => {
    const [initialized, setInitialized] = useState(false);
    const router = useRouter();
    const users = useLocalSearchParams();

    // This state checks if the app has been initialized
    useEffect(() => {
        const timer = setTimeout(() => {
            setInitialized(true);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    // Once initialized, check if the user is logged in, if so get the user's name
    useEffect(() => {
        if (initialized && !users.choice) {
                router.push(`/login/login_screen`);
        }
    }, [initialized, users.choice]);

    if (!users.choice) {
        return null;
    }

    return (
    // Main menu screen
        <SafeAreaView style={{ flex: 1 }}>
            <Stack.Screen
                options={{
                    headerTitle: ""
                }}
            />
            <Welcome
                userName={users.choice}
            />
        </SafeAreaView>
    )
}

export default Home;
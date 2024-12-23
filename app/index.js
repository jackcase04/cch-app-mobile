import React, { useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { Login } from '../components';
import { Stack, useRouter } from 'expo-router';

const Home = () => {
    const loggedIn = false;

    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            if (!loggedIn) {
                router.push(`/login/login_screen`);
            }
        }, 100)

        return () => clearTimeout(timer);
    }, []);

    if (!loggedIn) {
        return null;
    }

    return (
    // TODO: Main menu screen
        null
    )
}

export default Home;
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { Login } from '../../components';
import { Link, Stack, useRouter } from 'expo-router';

const LoginScreen = () => {
    const router = useRouter();

    const handleLogin = (name) => {
        // push the user's name to the query string
        router.push(`/?choice=${name}`)
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Stack.Screen
                options={{
                    headerTitle: ""
                }}
            />
            <Login
                onLogin={handleLogin}
            />
        </SafeAreaView>
    )
}

export default LoginScreen;
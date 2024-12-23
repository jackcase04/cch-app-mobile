import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { Login } from '../../components';
import { Link, Stack, useRouter } from 'expo-router';

const LoginScreen = () => {

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Stack.Screen
                options={{
                    headerTitle: ""
                }}
            />
            <Login />
        </SafeAreaView>
    )
}

export default LoginScreen;
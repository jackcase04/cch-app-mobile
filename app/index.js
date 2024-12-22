import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { Login } from '../components';
import { Stack, useRouter } from 'expo-router';

const Home = () => {
    return (
        // First check if the user is logged in. If so, render a screen where the user can log in.
        // After that add everything else here
        
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

export default Home;
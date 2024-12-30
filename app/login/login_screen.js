import React from 'react';
import { SafeAreaView } from 'react-native';
import { Login } from '../../components';
import { Stack, useRouter } from 'expo-router';

const LoginScreen = () => {
    const router = useRouter();

    const handleLogin = (name) => {
        // if name selected, push the user's name to the query string
        if (name) {
            router.push(`/?choice=${name}`)
        }
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Stack.Screen
                options={{
                    headerTitle: "",
                    headerShown: false,
                    gestureEnabled: false
                }}
            />
            <Login
                onLogin={handleLogin}
            />
        </SafeAreaView>
    )
}

export default LoginScreen;
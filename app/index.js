import { SafeAreaView } from 'react-native';
import { Header } from '../components';
import { Login, Dashboard } from '../screens';
import { Stack } from 'expo-router';
import { useAuth } from '../hooks/useAuth';
import { useEffect, useState } from 'react';
import { registerForPushNotificationsAsync } from '../services/notificationService';

// This app allows users to select their name, see their chores, and schedule notifications for their chores

const Home = () => {
    const { 
        userName,
        setUserName,
        handleLogout,
        logStatus,
        setLogStatus,
        isLoadingAuth,
        handleSignup,
        handleLogin
    } = useAuth('');

    const [pushToken, setPushToken ] = useState('');

    useEffect(() => {
        const initNotifications = async () => {
            try {
                const token = await registerForPushNotificationsAsync();
                console.log("Received: " + token);
                setPushToken(token);
            } catch (error) {
                console.error('Failed to get push token:', error);
            }
        };

        initNotifications();
    }, []);

    if (userName == '') {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <Stack.Screen
                    options={{
                        headerShown: false,
                        gestureEnabled: false
                    }}
                />

                <Login
                    setUserName={setUserName}
                    logStatus={logStatus}
                    setLogStatus={setLogStatus}
                    isLoadingAuth={isLoadingAuth}
                    handleSignup={handleSignup}
                    handleLogin={handleLogin}
                />
                
            </SafeAreaView>
        )
    } else {
        return (
            // Main menu screen
            <SafeAreaView style={{ flex: 1 }}>
                <Stack.Screen
                    options={{
                        headerShown: false,
                        gestureEnabled: false
                    }}
                />
                <Header
                    handleLogout={handleLogout}
                    userName={userName}
                />
                
                <Dashboard
                    userName={userName}
                    handleLogout={handleLogout}
                />
                
            </SafeAreaView>
        )
    }

    
}

export default Home;
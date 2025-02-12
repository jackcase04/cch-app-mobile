import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import { Welcome, Chores, Header } from '../components';
import { Stack, useLocalSearchParams } from 'expo-router';
import { setupLocalNotifications, verifyAndRescheduleNotifications } from '../services/notificationService';
import { useAuth } from '../hooks/useAuth';

// This app allows users to select their name, see their chores, and schedule notifications for their chores

const Home = () => {
    const users = useLocalSearchParams();
    const { userName, handleLogout } = useAuth(users);
    const [activeTab, setActiveTab] = useState("Chores");

    // Upon start of app
    useEffect(() => {
        setupLocalNotifications();
        verifyAndRescheduleNotifications();
    }, []);
            
    if (!userName) {
        return null;
    }

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
            <Welcome
                userName={userName}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />

            <Chores
                        userName={userName}
            />
            
        </SafeAreaView>
    )
}

export default Home;
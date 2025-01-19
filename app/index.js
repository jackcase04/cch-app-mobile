import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import { Welcome, Chores, Header } from '../components';
import { Stack, useLocalSearchParams } from 'expo-router';
import testChoresCSV from '../assets/test_chores.js';
import { parseChoresData } from '../services/choreService';
import { setupLocalNotifications, verifyAndRescheduleNotifications } from '../services/notificationService';
import { useAuth } from '../hooks/useAuth';
import { useNotifications } from '../services/notificationsManager';

const Home = () => {
    const users = useLocalSearchParams();
    const { userName, handleLogout } = useAuth(users);
    const [activeTab, setActiveTab] = useState("Chores");
    const [choresData, setChoresData] = useState([]);
    const { handleNotifications, clearNotifications } = useNotifications(choresData);

    // Upon start of app
    useEffect(() => {
        const data = parseChoresData(testChoresCSV);
        setChoresData(data);
        setupLocalNotifications();
        verifyAndRescheduleNotifications(data);
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
                        choresData={choresData}
                        scheduleNotifications={handleNotifications}
                        clearNotifications={clearNotifications}
            />
            
        </SafeAreaView>
    )
}

export default Home;
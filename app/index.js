import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import { Welcome, Chores, Header } from '../components';
import { Stack, useLocalSearchParams } from 'expo-router';
import testChoresCSV from '../assets/test_chores.js';
import { parseChoresData } from '../services/choreService';
import { initNotifications } from '../services/notificationService';
import { useAuth } from '../hooks/useAuth';
import { useReminder } from '../hooks/useReminder';
import { useNotifications } from '../services/notificationsManager';

initNotifications();

const Home = () => {
    const users = useLocalSearchParams();
    const { userName, handleLogout } = useAuth(users);
    // Destructure the object returned by useReminder
    const { reminder, setReminder } = useReminder();
    const [activeTab, setActiveTab] = useState("Chores");
    const [choresData, setChoresData] = useState([]);
    const { handleNotifications, clearNotifications } = useNotifications(choresData);

    // Load inital chores data
    useEffect(() => {
        const data = parseChoresData(testChoresCSV);
        setChoresData(data);
    }, []);

    if (!userName) {
        return null;
    }

    const displayTabContent = () => {
        switch (activeTab) {
            case "Chores":
                return (
                    <Chores
                        userName={userName}
                        choresData={choresData}
                        reminder={reminder}
                        setReminder={setReminder}
                        scheduleNotifications={handleNotifications}
                    />
                )
        }
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
            />
            <Welcome
                userName={userName}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />

            {displayTabContent()}
        </SafeAreaView>
    )
}

export default Home;
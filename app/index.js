import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native';
import { Welcome, Chores, Header } from '../components';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import testChoresCSV from '../assets/test_chores.js';
import { initNotifications, scheduleNotifications } from '../services/notificationService';
import { parseChoresData } from '../services/choreService';
import * as Notifications from 'expo-notifications';

initNotifications();

const Home = () => {
    const router = useRouter();
    const users = useLocalSearchParams();
    const [initialized, setInitialized] = useState(false);
    const [userName, setUserName] = useState("");
    const [activeTab, setActiveTab] = useState("Chores");
    const [reminder, setReminder] = useState("");
    const [choresData, setChoresData] = useState([]);

    // Load inital chores data
    useEffect(() => {
        const data = parseChoresData(testChoresCSV);
        setChoresData(data);
    }, []);

    const handleNotifications = async () => {
        try {
          await scheduleNotifications(choresData);
        } catch (error) {
          console.error('Failed to send notification:', error);
        }
    };

    const handleLogout = async () => {
        // Clear async storage, local variable, and users.choice
        // Then reroute to login screen and reset all those
        await AsyncStorage.clear();
        await Notifications.cancelAllScheduledNotificationsAsync();
        setUserName("");

        router.push(`/login/login_screen`);
    };

    // This state checks if the app has been initialized
    useEffect(() => {
        const timer = setTimeout(() => {
            setInitialized(true);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    // Once initialized, check if the user is logged in, if so get the user's name
    useEffect(() => {
        const checkIfLoggedIn = async () => {
            const choice = await AsyncStorage.getItem('name');
            // If there is a value in async
            if (choice) {
                setUserName(choice);
            // If there is no value in async
            } else {
                // if first time logging in
                if (initialized && !users.choice) {
                    router.push(`/login/login_screen`);
                    setUserName(users.choice);
                    await AsyncStorage.setItem('name', users.choice);
                // if rerouting from handleLogout
                } else if (initialized && users.choice) {
                    setUserName(users.choice);
                    await AsyncStorage.setItem('name', users.choice);
                }
            }
        }
        checkIfLoggedIn();
    }, [initialized, users.choice]);

    // stores reminder
    useEffect(() => {
        const storeReminder = async () => {
            if (reminder)
                await AsyncStorage.setItem('reminder', reminder);
        }
        storeReminder();
    }, [reminder]);

    // gets stored reminder
    useEffect(() => {
        const getReminder = async () => {
            try {
                const storedReminder = await AsyncStorage.getItem('reminder');
                if (storedReminder) {
                    setReminder(storedReminder);
                }
            } catch (error) {
                console.error('Error retrieving reminder:', error);
            }
        };
    
        getReminder();
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
                scheduleNotifications={handleNotifications}
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
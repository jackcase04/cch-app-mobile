import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// This hook allows the user to set and retrieve a reminder time for their chores
// Stores reminder in AsyncStorage
// basically allows for the state variable reminder to be stored in AsyncStorage when set just like a normal state variable

export const useReminder = () => {
    const [reminder, setReminder] = useState("1:00 PM"); //default reminder
    const [isInitialized, setIsInitialized] = useState(false);

    // gets stored reminder
    useEffect(() => {
        let isMounted = true;

        const getReminder = async () => {
            try {
                const storedReminder = await AsyncStorage.getItem('reminder');
                if (isMounted) {
                    if (storedReminder !== null) {
                        setReminder(storedReminder);
                    }
                }
            } catch (error) {
                if (isMounted) {
                    console.error('Error retrieving reminder:', error);
                }
            } finally {
                if (isMounted) {
                    setIsInitialized(true);
                }
            }
        };

        getReminder();

        return () => {
            isMounted = false;
        };
    }, []);

    // stores reminder
    useEffect(() => {
        if (!isInitialized) {
            return;
        }

        const storeReminder = async () => {
            try {
                if (reminder !== "") {
                    await AsyncStorage.setItem('reminder', reminder);
                } else {
                    await AsyncStorage.removeItem('reminder');
                    console.log('Reminder cleared from AsyncStorage.');
                }
            } catch (error){
                console.error('Error storing reminder:', error);
            }
        }
        storeReminder();
    }, [reminder, isInitialized]);

    return { reminder, setReminder };
}
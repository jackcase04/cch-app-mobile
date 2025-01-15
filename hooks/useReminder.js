import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useReminder = () => {
    const [reminder, setReminder] = useState("");

    // stores reminder
    useEffect(() => {
        const storeReminder = async () => {
            try {
                if (reminder)
                    await AsyncStorage.setItem('reminder', reminder);
            } catch (error){
                console.error('Error storing reminder:', error);
            }
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

    return { reminder, setReminder };
}
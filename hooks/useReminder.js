import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useReminder = () => {
    const [reminder, setReminder] = useState(null);
    const [isInitialized, setIsInitialized] = useState(false);

    // gets stored reminder
    useEffect(() => {
        const getReminder = async () => {
            try {
                const storedReminder = await AsyncStorage.getItem('reminder');
                if (storedReminder) {
                    setReminder(storedReminder);
                    console.log('Reminder retrieved from AsyncStorage:', storedReminder);
                } else {
                    setReminder("");
                }
                setIsInitialized(true);
            } catch (error) {
                console.error('Error retrieving reminder:', error);
            }
        };
    
        getReminder();
    }, []);

    // stores reminder
    useEffect(() => {
        if (!isInitialized) {
            return;
        }

        const storeReminder = async () => {
            try {
                if (reminder != "") {
                    await AsyncStorage.setItem('reminder', reminder);
                } else {
                    await AsyncStorage.removeItem('reminder');
                    console.log('Reminder', 'cleared from AsyncStorage.');
                }
            } catch (error){
                console.error('Error storing reminder:', error);
            }
        }
        storeReminder();
    }, [reminder, isInitialized]);

    

    return { reminder, setReminder };
}
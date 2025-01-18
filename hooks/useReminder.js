import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useReminder = () => {
    const [reminder, setReminder] = useState("");
    const [isLoading, setIsLoading] = useState(true);

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
                    setIsLoading(false);
                }
            } catch (error) {
                console.error('Error retrieving reminder:', error);
                if (isMounted) {
                    setIsLoading(false);
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
        if (isLoading) {
            return;
        }

        const storeReminder = async () => {
            try {
                if (reminder !== "") {
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
    }, [reminder, isLoading]);

    

    return { reminder, setReminder, isLoading };
}
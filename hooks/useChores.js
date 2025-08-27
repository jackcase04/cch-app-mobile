import { useState, useEffect } from 'react';
import { getChores } from '../services/choreService';
import { putReminder } from '../services/reminderService';
import { useReminder } from './useReminder'
import { useSwitch } from './useSwitch'
import { getTodaysDate } from '../utils'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useLoading } from '../contexts/LoadingContext';

export const useChores = (userName, handleLogout, setOnline) => {
    const { withLoading } = useLoading();
    const { reminder, setReminder } = useReminder();
    const { switchEnabled, setSwitchEnabled } = useSwitch();
    const [showPicker, setShowPicker] = useState(false);
    const [ chore, setChore ] = useState(null);

    const toggleSwitch = () => {
        const newSwitchState = !switchEnabled;
        setSwitchEnabled(newSwitchState);
        
        if (newSwitchState) {
            updateReminder(reminder)
        } else {
            updateReminder("reset")
        }
    }
    
    const handleReminderChange = (time) => {
        setReminder(time);
        if (switchEnabled) {
            updateReminder(time)
        }
    }

    const togglePicker = () => {
        setShowPicker(!showPicker);
    }

    const updateReminder = async (time) => {

        try {
            // console.log(time)
            const result = await putReminder(time);
            
            if (result.success) {
                console.log("successfully updated reminder: " + result.data.reminderTime)
            } else {
                console.log("Failed to update reminder: " + result.message)
            }

        } catch (error) {
            console.error("Error updating reminder:", error);
        }
    };

    const loadChore = async () => {
        await withLoading('load-chores', async () => {
            try {
                const result = await getChores(userName, getTodaysDate());
                
                // This will run if there is a chore
                if (result.success && result.data.description) {
                    // console.log("data recieved: " + result.data.description)
                    setChore(result.data.description);
                    setOnline(true);
                    await AsyncStorage.setItem('cachedChore', result.data.description);
                // This will run if there is no chore
                } else if (result.success && result.data.message) {
                    // console.log("message recieved: " + result.data.message)
                    setChore(result.data.message);
                    setOnline(true);
                    await AsyncStorage.setItem('cachedChore', result.data.message);
                } else {
                    console.log("Failed to load chores: " + result.message)
                    const localchore = await AsyncStorage.getItem('cachedChore');
                    setChore(localchore);
                    setOnline(false);
                }

            } catch (error) {
                console.error("Error loading chores:", error);
                const localchore = await AsyncStorage.getItem('cachedChore');
                setChore(localchore);
                setOnline(false);
            }
        });
    };

    useEffect(() => {
        loadChore()
    }, [userName]);

    return {
        chore,
        showPicker,
        togglePicker,
        reminder,
        setReminder,
        handleReminderChange,
        toggleSwitch,
        switchEnabled
    }
}
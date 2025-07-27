import { useState, useEffect } from 'react';
import { getChores } from '../services/choreService';
import { putReminder } from '../services/reminderService';
import { useReminder } from './useReminder'
import { useSwitch } from './useSwitch'
import { getTodaysDate } from '../utils'
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useChores = (userName, handleLogout) => {
    const { reminder, setReminder, isReminderLoading } = useReminder();
    const { switchEnabled, setSwitchEnabled, isSwitchLoading } = useSwitch();
    const [showPicker, setShowPicker] = useState(false);
    const [ chore, setChore ] = useState(null);
    const [ isLoading, setIsLoading ] = useState(null);

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

        setIsLoading(true);

        try {
            const result = await getChores(userName, getTodaysDate());
            
            // This will run if there is a chore
            if (result.success && result.data.description) {
                console.log("data recieved: " + result.data.description)
                setChore(result.data.description)
                await AsyncStorage.setItem('cachedChore', result.data.description);
            // This will run if there is no chore
            } else if (result.success && result.data.message) {
                console.log("message recieved: " + result.data.message)
                setChore(result.data.message)
                await AsyncStorage.setItem('cachedChore', result.data.message);
            // Obviously this will run if JWT is expired
            } else if (result.message == "JWT token has expired") {
                console.log(result.message)

                // Do logic to logout
                handleLogout()
            } else {
                console.log("Failed to load chores: " + result.message)
                const localchore = await AsyncStorage('cachedChore');
                setChore(localchore)
            }

        } catch (error) {
            console.error("Error loading chores:", error);
        } finally {
            setIsLoading(false)
        }
    };

    useEffect(() => {
        loadChore()
    }, []);

    return {
        chore,
        showPicker,
        togglePicker,
        reminder,
        setReminder,
        handleReminderChange,
        toggleSwitch,
        switchEnabled,
        isLoading,
        isReminderLoading,
        isSwitchLoading,
    }
}
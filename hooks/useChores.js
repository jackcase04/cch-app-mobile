import { useState, useEffect } from 'react';
import { getChores } from '../services/choreService';
import { putReminder } from '../services/reminderService';
import { useReminder } from './useReminder'
import { useSwitch } from './useSwitch'
import { getTodaysDate } from '../utils'

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
            
            if (result.success && result.data[0]) {
                console.log("data recieved: " + result.data[0].description)
                setChore(result.data[0].description)
            } else if (result.success && result.data.message) {
                console.log("message recieved: " + result.data.message)
                setChore(result.data.message)
            } else if (result.message == "JWT token has expired") {
                console.log(result.message)

                // Do logic to logout
                handleLogout()
            } else {
                console.log("Failed to load chores: " + result.message)
            }

        } catch (error) {
            console.error("Error loading names:", error);
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
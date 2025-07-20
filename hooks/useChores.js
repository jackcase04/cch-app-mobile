import { useState, useEffect } from 'react';
import { getChores } from '../services/choreService';
import { useReminder } from './useReminder'
import { useSwitch } from './useSwitch'
import { getTodaysDate } from '../utils'
// We wont need this
import { scheduleNotifications, clearNotifications } from '../services/notificationService';

export const useChores = (userName) => {
    const { reminder, setReminder, isReminderLoading } = useReminder();
    const { switchEnabled, setSwitchEnabled, isSwitchLoading } = useSwitch();
    const [showPicker, setShowPicker] = useState(false);
    const [ chore, setChore ] = useState(null);
    const [ isLoading, setIsLoading ] = useState(null);

    const toggleSwitch = () => {
        const newSwitchState = !switchEnabled;
        setSwitchEnabled(newSwitchState);
        
        if (newSwitchState) {
            scheduleNotifications();
        } else {
            clearNotifications();
        }
    }
    
    const handleReminderChange = (time) => {
        setReminder(time);
        if (switchEnabled) {
            scheduleNotifications();
        }
    }

    const togglePicker = () => {
        setShowPicker(!showPicker);
    }

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
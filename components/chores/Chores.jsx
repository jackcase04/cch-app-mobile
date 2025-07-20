import { useState, useEffect } from 'react';
import { View, Text, Modal, TouchableOpacity, Switch, Image, ActivityIndicator } from 'react-native';
import styles from './chores.style';
import { getTodaysDate } from '../../utils';
import ReminderPicker from '../reminderPicker/ReminderPicker';
import icons from '../../constants/icons';
import { useReminder } from '../../hooks/useReminder';
import { useSwitch } from '../../hooks/useSwitch';
import useFetch from '../../hooks/useFetch';

import { scheduleNotifications, clearNotifications } from '../../services/notificationService';
// This is a component that displays the user's chore for the day and allows them to schedule reminders

const Chores = ({ userName }) => {
    const { reminder, setReminder, isReminderLoading } = useReminder();
    const { switchEnabled, setSwitchEnabled, isSwitchLoading } = useSwitch();
    const [showPicker, setShowPicker] = useState(false);
    const { data, isLoading, error } = useFetch(`/chores/${userName}/date/${getTodaysDate()}`);
    const [ chore, setChore ] = useState(null);

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

    // Filter chore by date and name
    useEffect(() => {
        if (data && Array.isArray(data) && data.length > 0) {
            const description = data[0].description;
            console.log("Fetched Chore Description: ", description);
            setChore(description);
        }
    }, [data]);

    if (isReminderLoading || isSwitchLoading || isLoading) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#532857" />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.choresContainer}>
                {(chore != "No chores for that name today") ? (
                    <>
                        <Text style={styles.choreMessage}>Your Chore today is:</Text>
                        <Text style={styles.chore}>{chore}</Text>
                    </>
                ) : (
                    <>
                        <Text style={styles.noChoreMessage}>No chores for today!</Text>
                    </>
                )}
            </View>
            
            <View style={styles.remindersContainer}>
                <Text style={[styles.reminderMessage, {marginBottom: 5}]}>Schedule Reoccurring  Reminder</Text>
                <Modal
                    visible={showPicker}
                    transparent={true}
                    animationType="fade"
                >
                    {/* rest of the screen */}
                    <TouchableOpacity 
                        style={styles.modalOverlay}
                        activeOpacity={1} 
                        onPress={togglePicker}
                    >
                        {/* picker area */}
                        <TouchableOpacity
                            style={styles.modalContent}
                            activeOpacity={1}
                            onPress={(e) => e.stopPropagation()}
                        >
                            <ReminderPicker
                                reminder={reminder}
                                setReminder={setReminder}
                                togglePicker={togglePicker}
                                handleReminderChange={handleReminderChange}
                            />
                        </TouchableOpacity>
                    </TouchableOpacity>
                </Modal>

                <View style={styles.reminderSchedulerContainer}>
                    <TouchableOpacity 
                        onPress={togglePicker}
                        style={styles.reminderPicker}
                    >
                        <Text style={styles.reminderPickerText}>{reminder}</Text>
                        <Image
                            source={icons.downArrow}
                            style={styles.downArrow}
                        />
                    </TouchableOpacity>

                    <Switch
                        trackColor={{ false: '#767577', true: '#FE7654' }}
                        thumbColor={switchEnabled ? 'white' : 'white'}
                        onValueChange={toggleSwitch}
                        value={switchEnabled}
                    />
                </View>
            </View>
        </View>
    )
}

export default Chores;
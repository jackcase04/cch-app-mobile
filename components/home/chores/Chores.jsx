import { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, Switch } from 'react-native';
import styles from './chores.style';
import { getTodaysDate } from '../../../utils';
import ReminderPicker from './reminderPicker/ReminderPicker';

const Chores = ({ choresData, userName, reminder, setReminder, scheduleNotifications, clearNotifications }) => {
    const [tempReminder, setTempReminder] = useState("1:00 PM");
    const [showPicker, setShowPicker] = useState(false);

    const [isSwitchEnabled, setIsSwitchEnabled] = useState(false);

    const toggleSwitch = () => {
        setIsSwitchEnabled(previousState => !previousState);
        if (!isSwitchEnabled) {
            setReminder(tempReminder);
            scheduleNotifications();
        } else {
            clearNotifications();
            setReminder("");
        }
    }

    const togglePicker = () => {
        setShowPicker(!showPicker);
    }

    // Filter chore by date and name
    const chore = choresData.find(chore => (chore.date === getTodaysDate() && chore.name === userName));

    return (
        <View style={styles.container}>
            <View style={styles.choresContainer}>
                {chore ? (
                    <>
                        <Text style={styles.choreMessage}>Your Chore today is:</Text>
                        <Text style={styles.chore}>{chore.location}</Text>
                    </>
                ) : (
                    <>
                        <Text style={styles.noChoreMessage}>No chores for today!</Text>
                    </>
                )}
            </View>
            
            <View style={styles.remindersContainer}>
                <Text style={[styles.reminderMessage, {marginBottom: 5}]}>Schedule Daily Reminder</Text>
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
                                setTempReminder={setTempReminder}
                                togglePicker={togglePicker}
                            />
                        </TouchableOpacity>
                    </TouchableOpacity>
                </Modal>

                <View style={styles.reminderSchedulerContainer}>
                    <TouchableOpacity 
                        onPress={togglePicker}
                        style={styles.reminderPicker}
                    >
                        <Text style={styles.reminderPickerText}>{tempReminder}</Text>
                    </TouchableOpacity>

                    <Switch
                        trackColor={{ false: '#767577', true: '#81b0ff' }}
                        thumbColor={isSwitchEnabled ? '#f5dd4b' : '#f4f3f4'}
                        onValueChange={toggleSwitch}
                        value={isSwitchEnabled}
                    />
                </View>
                <Text style={[styles.messages, {marginBottom: 5}]}>Reminder scheduled for: {reminder}</Text>
            </View>
        </View>
    )
}

export default Chores;
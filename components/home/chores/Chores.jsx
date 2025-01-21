import { useState, useEffect } from 'react';
import { View, Text, Modal, TouchableOpacity, Switch, Image, ActivityIndicator } from 'react-native';
import styles from './chores.style';
import { getTodaysDate } from '../../../utils';
import ReminderPicker from './reminderPicker/ReminderPicker';
import icons from '../../../constants/icons';
import { useReminder } from '../../../hooks/useReminder';
import { useSwitch } from '../../../hooks/useSwitch';

const Chores = ({ choresData, userName, scheduleNotifications, clearNotifications }) => {
    const { reminder, setReminder, isReminderLoading } = useReminder();
    const { switchEnabled, setSwitchEnabled, isSwitchLoading } = useSwitch();
    const [showPicker, setShowPicker] = useState(false);

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
    const chore = choresData.find(chore => (chore.date === getTodaysDate() && chore.name === userName));

    if (isReminderLoading || isSwitchLoading || choresData.length === 0 || !choresData) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#532857" />
            </View>
        );
    }

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
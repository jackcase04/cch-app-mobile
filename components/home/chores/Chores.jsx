import { useState } from 'react';
import { View, Text, Modal, TouchableOpacity } from 'react-native';
import styles from './chores.style';
import { getTodaysDate } from '../../../utils';
import ReminderPicker from './reminderPicker/ReminderPicker';
import { Picker } from '@react-native-picker/picker';

const Chores = ({ choresData, userName, reminder, setReminder, scheduleNotifications }) => {
    const [tempReminder, setTempReminder] = useState("");
    const [showPicker, setShowPicker] = useState(false);

    const togglePicker = () => {
        setShowPicker(!showPicker);
    }

    const [testpicker, setTestpicker] = useState("");
    const testpickers = ["1", "2", "3"];

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
                <Text style={[styles.messages, {marginBottom: 5}]}>Schedule Daily Reminder</Text>
                {/* <ScrollView style={[styles.dropdownMenu]}>
                    {times.map((item, index) => (
                        <TouchableOpacity
                            key={index}
                            onPress={() => {setTempReminder(item)}}
                        >
                            <Text style={styles.times}>{item}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView> */}
                <TouchableOpacity onPress={togglePicker}>
                    <Text>7:00pm</Text>
                </TouchableOpacity>
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

                <Text style={styles.messages}>Selected: {tempReminder}</Text>

                <TouchableOpacity 
                    style={styles.Button}
                    onPress={() => {
                        if (tempReminder) {
                            setReminder(tempReminder);
                            scheduleNotifications();
                        }
                    }}
                >
                    <Text style={styles.Text}>Confirm</Text>
                </TouchableOpacity>
                <Text style={[styles.messages, {marginBottom: 5}]}>Reminder scheduled for: {reminder}</Text>
            </View>
        </View>
    )
}

export default Chores;
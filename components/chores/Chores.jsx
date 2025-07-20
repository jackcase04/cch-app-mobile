import { View, Text, Modal, TouchableOpacity, Switch, Image, ActivityIndicator } from 'react-native';
import styles from './chores.style';
import ReminderPicker from '../reminderPicker/ReminderPicker';
import icons from '../../constants/icons';
import { useChores } from '../../hooks/useChores'

// This is a component that displays the user's chore for the day and allows them to schedule reminders

const Chores = ({ userName }) => {
    const {
        chore,
        showPicker,
        togglePicker,
        reminder,
        setReminder,
        handleReminderChange,
        toggleSwitch,
        switchEnabled,
        isReminderLoading,
        isSwitchLoading,
        isLoading
    } = useChores(userName);

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
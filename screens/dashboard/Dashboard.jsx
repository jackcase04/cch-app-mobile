import { View, Text, Modal, TouchableOpacity, Switch, Image, ActivityIndicator } from 'react-native';
import styles from './dashboard.style';
import ReminderPicker from '../../components/reminderPicker/ReminderPicker';
import icons from '../../constants/icons';
import { useChores } from '../../hooks/useChores'
import { Header } from '../../components';
import { useAuthContext } from '../../contexts/AuthContext';
import { useAppContext } from '../../contexts/AppContext';

// This is a component that displays the user's chore for the day and allows them to schedule reminders

const Dashboard = () => {
    const { userName, handleLogout } = useAuthContext();
    const { online, setOnline } = useAppContext();
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
    } = useChores(userName, handleLogout, setOnline);

    if (isReminderLoading || isSwitchLoading || isLoading) {
        return (
            <View style={styles.loadingcontainer}>
                <ActivityIndicator size="large" color="#532857" />
            </View>
        );
    } else {
        return (
            <View style={styles.container}>
                <View style={[styles.headerWrapper, !online && styles.disabledSection]}>
                    <Header />
                </View>

                {!online && (
                    <View style={styles.offlineContainer}>
                        <Text style={styles.offlineMessage}>You are currently offline.</Text>
                    </View>
                )}

                <Text style={styles.welcomeMessage} >Welcome, {userName.split(' ')[0]}</Text>
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
                
                <View style={[styles.remindersContainer, !online && styles.disabledSection]}>
                    <Text style={[styles.reminderMessage, {marginBottom: 5}]}>Schedule Reoccurring  Reminder</Text>
                    <Modal
                        visible={showPicker && online}
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
                            onPress={online ? togglePicker : null}
                            style={[styles.reminderPicker, !online && styles.disabledButton]}
                            disabled={!online}
                        >
                            <Text style={[styles.reminderPickerText, !online && styles.disabledText]}>{reminder}</Text>
                            <Image
                                source={icons.downArrow}
                                style={[styles.downArrow, !online && styles.disabledImage]}
                            />
                        </TouchableOpacity>

                        <Switch
                            trackColor={{ false: '#767577', true: online ? '#FE7654' : '#cccccc' }}
                            thumbColor={switchEnabled ? 'white' : 'white'}
                            onValueChange={online ? toggleSwitch : null}
                            value={switchEnabled}
                            disabled={!online}
                        />
                    </View>
                </View>
            </View>
        )
    }

    
}

export default Dashboard;
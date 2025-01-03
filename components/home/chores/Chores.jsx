import { useState } from 'react';
import { View, Text, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import styles from './chores.style';
import times from '../../../assets/time_intervals';

const Chores = ({ choresData, userName, reminder, setReminder }) => {
    const screenHeight = Dimensions.get('window').height;
    const screenWidth = Dimensions.get('window').width;
    const [tempReminder, setTempReminder] = useState("");

    // function to get the date in MM/DD format
    const getTodaysDate = () => {
        const today = new Date();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        const year = String(today.getFullYear());
        return `${month}/${day}/${year}`;
    };

    // Filter chores by date and name
    const chore = choresData.find(chore => (chore.date === getTodaysDate() && chore.name === userName));

    return (
        <View style={styles.container}>
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
            
            <View>
                <Text style={styles.messages}>Schedule reminder</Text>
                <ScrollView style={[styles.dropdownMenu, {height: screenHeight * 0.1}, {width: screenWidth * 0.3}]}>
                    {times.map((item, index) => (
                        <TouchableOpacity
                            key={index}
                            onPress={() => {setTempReminder(item)}}
                        >
                            <Text style={styles.times}>{item}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
                <Text style={styles.messages}>Selected: {tempReminder}</Text>

                <TouchableOpacity 
                    style={styles.Button}
                    onPress={() => setReminder(tempReminder)}
                >
                    <Text style={styles.Text}>Confirm</Text>
                </TouchableOpacity>
                <Text>Reminder scheduled for: {reminder}</Text>
            </View>
        </View>
    )
}

export default Chores;
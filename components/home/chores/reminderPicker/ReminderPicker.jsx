import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from './reminderPicker.style.js';

const ReminderPicker = ({ setTempReminder, togglePicker }) => {
    const [selectedHour, setSelectedHour] = useState("01");
    const [selectedMinute, setSelectedMinute] = useState("00");
    const [selectedAMPM, setSelectedAMPM] = useState('AM');

    const hours = Array.from({ length: 12 }, (_, i) => 
        (i+1).toString().padStart(2, '0')
    );

    const minutes = Array.from({ length: 60 }, (_, i) => 
        i.toString().padStart(2, '0')
    );

    const combinedTime = `${selectedHour}:${selectedMinute} ${selectedAMPM}`;

    return (
        <View>
            <View style={styles.pickerContainer}>
                <View style={styles.pickerWrapper}>
                    <Text style={styles.pickerLabel}>Hour</Text>
                    <Picker
                        selectedValue={selectedHour}
                        style={styles.picker}
                        itemStyle={styles.pickerItem}
                        onValueChange={(itemValue) => setSelectedHour(itemValue)}
                        mode="dropdown"
                    >
                        {hours.map((hour) => (
                            <Picker.Item 
                                key={hour} 
                                label={hour}
                                value={hour}
                                color="black"
                                
                            />
                        ))}
                    </Picker>
                </View>

                <View style={styles.pickerWrapper}>
                    <Text style={styles.pickerLabel}>Minute</Text>
                    <Picker
                        selectedValue={selectedMinute}
                        style={styles.picker}
                        itemStyle={styles.pickerItem}
                        onValueChange={(itemValue) => setSelectedMinute(itemValue)}
                        mode="dropdown"
                    >
                        {minutes.map((minute) => (
                            <Picker.Item 
                                key={minute} 
                                label={minute} 
                                value={minute}
                                color="black"
                            />
                        ))}
                    </Picker>
                </View>

                <View style={styles.ampmcontainer}>
                    <TouchableOpacity
                        onPress={() => setSelectedAMPM('AM')}
                        style={selectedAMPM === 'AM' ? styles.selectedbutton : styles.unselectedbutton}
                    >
                        <Text style={selectedAMPM === 'AM' ? styles.selectedtext : styles.unselectedtext}>AM</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => setSelectedAMPM('PM')}
                        style={selectedAMPM === 'PM' ? styles.selectedbutton : styles.unselectedbutton}
                    >
                        <Text style={selectedAMPM === 'PM' ? styles.selectedtext : styles.unselectedtext}>PM</Text>
                    </TouchableOpacity>
                </View>
            </View>
            
            <Text style={styles.timeDisplay}>
                Selected Time: {combinedTime}
            </Text>
            <View style={styles.doneContainer}>
                <TouchableOpacity
                    style={styles.done}
                    onPress={
                        () => {
                            setTempReminder(combinedTime);
                            togglePicker();
                        }
                    }
                >
                    <Text style={styles.doneText}>Done</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ReminderPicker;

import { useState } from 'react';
import { View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from './reminderPicker.style.js';

const ReminderPicker = ({ setTempReminder, togglePicker }) => {
    const [selectedHour, setSelectedHour] = useState("01");
    const [selectedMinute, setSelectedMinute] = useState("00");
    const [selectedAMPM, setSelectedAMPM] = useState('AM');

    // Generate hours (01-12)
    const hours = Array.from({ length: 12 }, (_, i) => 
        (i+1).toString().padStart(2, '0')
    );

    // Generate minutes (00-59)
    const minutes = Array.from({ length: 60 }, (_, i) => 
        i.toString().padStart(2, '0')
    );

    const ampm = ['AM', 'PM'];

    // Combine hour and minute into a single time string
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

                <View style={styles.pickerWrapper}>
                  <Text style={styles.pickerLabel}>am/pm</Text>
                    <Picker
                      selectedValue={selectedAMPM}
                      style={styles.picker}
                      itemStyle={styles.pickerItem}
                      onValueChange={(itemValue) => setSelectedAMPM(itemValue)}
                    >
                      {ampm.map((ampm) => (
                        <Picker.Item
                          key={ampm}
                          label={ampm}
                          value={ampm}
                          color="black"
                        />
                      ))}
                  </Picker>
                </View>
            </View>
            
            <Text style={styles.timeDisplay}>
                Selected Time: {combinedTime}
            </Text>
        </View>
    )
}

export default ReminderPicker;

import { View, Text, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from './nameSelect.style';

const NameSelect = ({ names, tempName, setTempName, setLogStatus }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.selectMessage}>Select your name:</Text>
            <Picker
                selectedValue={tempName}
                onValueChange={(itemValue) => setTempName(itemValue)}
                style={styles.picker}
            >
                {names.map((item, index) => (
                    <Picker.Item
                        key={index}
                        label={item}
                        value={item}
                        color="black"
                    />
                ))}
            </Picker>

            <TouchableOpacity 
                style={styles.loginButton}
                // When login button is pressed, tempname is confirmed as the user's name
                // TODO: Display login screen
                onPress={() => {
                    setLogStatus("signupInput")
                }}
            >
                <Text style={styles.loginText}>Confirm</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={styles.signupButton}
                onPress={() => {
                    setLogStatus("")
                }}
            >
                <Text style={styles.signupText}>Go Back</Text>
            </TouchableOpacity>
        </View>
    )
}

export default NameSelect;
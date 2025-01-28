import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './login.style';
import namesCSV from '../../../assets/names';
import { parseNamesData } from '../../../services/choreService';
import { sortByFirstName } from '../../../utils';
import { Picker } from '@react-native-picker/picker';

// This component allows users to select their name to login

const Login = ({ onLogin }) => {
    const names = sortByFirstName(parseNamesData(namesCSV));
    const [tempName, setTempName] = useState(names[0]);

    return (
        <View style={styles.container}>
            <Text style={styles.welcomeMessage}>Welcome to the CCH App!</Text>
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
                onPress={() => {
                    if (tempName) {
                        onLogin(tempName)
                    }
                }}
            >
                <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Login;
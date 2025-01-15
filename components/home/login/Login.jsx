import React, { useState } from 'react';
import { View, Text, ScrollView, Dimensions, TouchableOpacity, Button } from 'react-native';
import styles from './login.style';
import names from '../../../assets/names';

const Login = ({ onLogin }) => {
    const [tempName, setTempName] = useState("");
    const screenHeight = Dimensions.get('window').height;

    return (
        <View style={styles.container}>
            <Text style={styles.welcomeMessage}>Welcome to the CCH App!</Text>
            <Text style={styles.selectMessage}>Select your name:</Text>
            <ScrollView style={[styles.dropdownMenu, {height: screenHeight * 0.1}]}>
                {names.map((item, index) => (
                    <TouchableOpacity
                        key={index}
                        // When name is selected, set the name to the tempName state
                        onPress={() => setTempName(item)}
                    >
                        <Text style={styles.names} >{item}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>

            <Text style={styles.selectedName}>Selected Name: {tempName}</Text>

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
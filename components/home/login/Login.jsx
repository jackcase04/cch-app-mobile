import React, { useState } from 'react';
import { View, Text, ScrollView, FlatList, Dimensions, TouchableOpacity } from 'react-native';
import styles from './login.style';

const Login = ({ onLogin }) => {
    const [tempName, setTempName] = useState("");
    const screenHeight = Dimensions.get('window').height;

    const sampleData = ["Jack", "Austin", "Simon", "Johnathan", "", "", "", "", "", "", "", "", "", " "];

    return (
        <View style={styles.container}>
            <Text style={styles.welcomeMessage}>Welcome to the CCH App!</Text>
            <Text style={styles.selectMessage}>Select your name:</Text>
            <ScrollView style={[styles.dropdownMenu, {height: screenHeight * 0.1}]}>
                {sampleData.map((item, index) => (
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
                onPress={() => onLogin(tempName)}
            >
                <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Login;
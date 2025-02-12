import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import styles from './login.style';
import { Picker } from '@react-native-picker/picker';
import useFetch from '../../../hooks/useFetch';

// This component allows users to select their name to login

const Login = ({ onLogin }) => {
    const { data, isLoading, error } = useFetch('/names');
    const [names, setNames] = useState([]);
    const [tempName, setTempName] = useState(''); 

    // Process names when data changes 
    useEffect(() => {
        if (data) {
            const sortedNames = data.map(item => item.name).sort();
            console.log("Data Fetched: ", sortedNames);
            setNames(sortedNames);
            if (sortedNames.length > 0 && !tempName) {
                setTempName(sortedNames[0]);
            }
        }
    }, [data]);

    if (isLoading) {
        return (
            <View style={styles.loadingcontainer}>
                <ActivityIndicator size="large" color="#532857" />
            </View>
        );
    }

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
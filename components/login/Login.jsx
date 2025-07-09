import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import styles from './login.style';
import { Picker } from '@react-native-picker/picker';
import useFetch from '../../hooks/useFetch';
import { loginUser } from '../../services/authService'
import { Alert } from 'react-native';

// This component allows users to select their name to login
// TODO: This component can call "subcomponents" that correspond to the different states a user could be logging in"

const Login = ({ onLogin }) => {
    const { data, isLoading, error } = useFetch('/names');
    const [names, setNames] = useState([]);
    const [tempName, setTempName] = useState('');
    // TODO: Pull this from Async
    const [logStatus, setLogStatus] = useState('');

    const [inputUser, setinputUser] = useState('');
    const [inputPass, setInputPass] = useState('');

    const handleLogin = async () => {
        const result = await loginUser(inputUser, inputPass);
        
        if (!(result.data.message)) {
            console.log('Login successful', result.message);
            Alert.alert('Success', result.message);
            // Navigate to next screen here
            // navigation.navigate('Home');
            onLogin(tempName)
        } else {
            console.log("not success", result.message)
            Alert.alert('Error, login insuccessful');
        }
    };

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

    if (logStatus == "signup") {
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
                        setLogStatus("login")
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
    } else if (logStatus == "login") {
        return (
            <View style={styles.container}>
                <Text style={styles.selectMessage}>Enter your login info:</Text>
                <TextInput
                    placeholder="Enter username"
                    value={inputUser}
                    onChangeText={text => setinputUser(text)}
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10}}
                />
                <Text>You typed: {inputUser}</Text>

                <TextInput
                    placeholder="Enter password"
                    value={inputPass}
                    onChangeText={text => setInputPass(text)}
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10}}
                />
                <Text>You typed: {inputPass}</Text>

                <TouchableOpacity 
                    style={styles.loginButton}
                    onPress={handleLogin}
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
    } else {
        return (
            <View style={styles.container}>
                <Text style={styles.welcomeMessage}>Welcome to the CCH App!</Text>

                <TouchableOpacity 
                    style={styles.signupButton}
                    onPress={() => {
                        setLogStatus("signup")
                    }}
                >
                    <Text style={styles.signupText}>Sign Up</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.loginButton}
                    // When login button is pressed, tempname is confirmed as the user's name
                    // TODO: Display login screen
                    onPress={() => {
                        setLogStatus("login")
                    }}
                >
                    <Text style={styles.loginText}>Login</Text>
                </TouchableOpacity>
            </View>
        )
    }
    
}

export default Login;
import React, { useState } from 'react';
import { View, Text, ScrollView, FlatList, Dimensions, TouchableOpacity } from 'react-native';
import styles from './login.style';

const Login = () => {

    const screenHeight = Dimensions.get('window').height;

    const sampleData = ["Jack", "Austin", "Simon", "Johnathan", "", "", "", "", "", "", "", "", "", " "];

    return (
        <View style={styles.container}>
            <Text style={styles.welcomeMessage}>Welcome to the CCH App!</Text>
            <Text style={styles.selectMessage}>Select your name:</Text>
            <ScrollView style={[styles.dropdownMenu, {height: screenHeight * 0.1}]}>
                {sampleData.map((item, index) => (
                    <TouchableOpacity>
                        <Text style={styles.names} >{item}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
                <TouchableOpacity style={styles.loginButton}>
                    <Text style={styles.loginText}>Login</Text>
                </TouchableOpacity>
        </View>
    )
}

export default Login;
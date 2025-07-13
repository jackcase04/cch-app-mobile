import { useState, useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { Landing, LoginInput, NameSelect, SignupInput } from '../../components'
import styles from './login.style';
import useFetch from '../../hooks/useFetch';
import { loginUser, signupUser } from '../../services/authService'
import { Alert } from 'react-native';

// This component allows users to select their name to login

const Login = ({ onLogin }) => {
    const { data, isLoading, error } = useFetch('/names');
    const [names, setNames] = useState([]);
    const [tempName, setTempName] = useState('');
    // TODO: Pull this from Async
    const [logStatus, setLogStatus] = useState('');

    const [inputUser, setinputUser] = useState('');
    const [inputPass, setInputPass] = useState('');

    const handleLogin = async () => {
        console.log("handle login called")

        const result = await loginUser(inputUser, inputPass);
        
        if (!(result.data.message)) {
            console.log('Login successful', result.message);
            Alert.alert('Success', result.message);

            // onLogin(tempName)
        } else {
            console.log("not success", result.message)
            Alert.alert('Error, login insuccessful');
        }
    };

    const handleSignup = async () => {
        const result = await signupUser(tempName, inputUser, inputPass);
        
        if (result.message == "Name not found in allowed names list") {
            console.log("Error: " + result.message);
        } else if (result.message == "Name already registered by another user") {
            console.log("Error: " + result.message);
        } else {
            console.log("Success!");

            // Do logic here
        }
    }

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
            <NameSelect
                names={names}
                tempName={tempName}
                setTempName={setTempName}
                setLogStatus={setLogStatus}
            />
        )
    } else if (logStatus == "signupInput") {
        return (
            <SignupInput
                inputUser={inputUser}
                inputPass={inputPass}
                setinputUser={setinputUser}
                setInputPass={setInputPass}
                handleSignup={handleSignup}
                setLogStatus={setLogStatus}
            />
        )
    } else if (logStatus == "login") {
        return (
            <LoginInput
                inputUser={inputUser}
                inputPass={inputPass}
                setinputUser={setinputUser}
                setInputPass={setInputPass}
                handleLogin={handleLogin}
                setLogStatus={setLogStatus}
            />
        )
        
    } else {
        return (
            <Landing
                setLogStatus={setLogStatus}
            />
        )
    }
    
}

export default Login;
import { View, ActivityIndicator, Text, TouchableOpacity } from 'react-native';
import { Landing, LoginInput, NameSelect, SignupInput } from '../../components';
import styles from './login.style';
import { useNames } from '../../hooks/useNames';
import { useHealth } from '../../hooks/useHealth';
import { useAuthContext } from '../../contexts/AuthContext';
import { useAppContext } from '../../contexts/AppContext';
import { useLoading } from '../../contexts/LoadingContext';

const Login = () => {
    const { logStatus, setLogStatus, handleSignup, handleLogin, loginError } = useAuthContext();
    const { online, setOnline } = useAppContext();
    const { isLoading } = useLoading();
    
    const {
        names,
        tempName,
        setTempName,
        inputUser,
        setInputUser,
        inputPass,
        setInputPass
    } = useNames(logStatus, setLogStatus, setOnline);

    useHealth(setOnline, logStatus);

    if (isLoading) {
        return (
            <View style={styles.loadingcontainer}>
                <ActivityIndicator size="large" color="#532857" />
            </View>
        );
    }

    if (!online) {
        return (
            <View style={styles.networkErrorContainer}>
                <View style={styles.errorContainer}>
                    <Text style={styles.errorMessage}>Network Error</Text>
                    <Text style={styles.error}>We're sorry, there is currently a network error. Please check your connection and try again.</Text>
                </View>

                <TouchableOpacity 
                    style={styles.signupButton}
                    onPress={() => {
                        setOnline(true)
                        setLogStatus("")
                    }}
                >
                    <Text style={styles.signupText}>Go Back</Text>
                </TouchableOpacity>
            </View>
        );
    }

    // Render different screens based on logStatus
    switch (logStatus) {
        case 'signup':
            return (
                <NameSelect
                    names={names}
                    tempName={tempName}
                    setTempName={setTempName}
                />
            );
            
        case 'signupInput':
            return (
                <SignupInput
                    inputUser={inputUser}
                    inputPass={inputPass}
                    setinputUser={setInputUser}
                    setInputPass={setInputPass}
                    tempName={tempName}
                />
            );
            
        case 'login':
            return (
                <LoginInput 
                    inputUser={inputUser}
                    setInputUser={setInputUser}
                    inputPass={inputPass}
                    setInputPass={setInputPass}
                />
            );
            
        default:
            return (
                <Landing />
            );
    }
};

export default Login;
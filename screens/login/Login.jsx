import { View, ActivityIndicator, Text, TouchableOpacity } from 'react-native';
import { Landing, LoginInput, NameSelect, SignupInput } from '../../components';
import styles from './login.style';
import { useNames } from '../../hooks/useNames';
import { useHealth } from '../../hooks/useHealth';

const Login = ({ setUserName, logStatus, setLogStatus, isLoadingAuth, handleSignup, handleLogin, pushToken, online, setOnline }) => {
    const {
        names,
        tempName,
        setTempName,
        inputUser,
        setInputUser,
        inputPass,
        setInputPass,
        isLoadingNames
    } = useNames(logStatus, setLogStatus, setOnline);

    const {
        isLoading
    } = useHealth(setOnline, logStatus);

    if (isLoadingNames || isLoadingAuth || isLoading) {
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
                    setLogStatus={setLogStatus}
                    setOnline={setOnline}
                />
            );
            
        case 'signupInput':
            return (
                <SignupInput
                    inputUser={inputUser}
                    inputPass={inputPass}
                    setinputUser={setInputUser}
                    setInputPass={setInputPass}
                    handleSignup={handleSignup}
                    setLogStatus={setLogStatus}
                    tempName={tempName}
                />
            );
            
        case 'login':
            return (
                <LoginInput
                    inputUser={inputUser}
                    inputPass={inputPass}
                    setinputUser={setInputUser}
                    setInputPass={setInputPass}
                    handleLogin={handleLogin}
                    logStatus={logStatus}
                    setLogStatus={setLogStatus}
                    setOnline={setOnline}
                />
            );
            
        default:
            return (
                <Landing
                    setLogStatus={setLogStatus}
                />
            );
    }
};

export default Login;
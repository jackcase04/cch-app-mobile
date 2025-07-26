import { View, ActivityIndicator, Text, TouchableOpacity } from 'react-native';
import { Landing, LoginInput, NameSelect, SignupInput } from '../../components';
import styles from './login.style';
import { useNames } from '../../hooks/useNames';

const Login = ({ setUserName, logStatus, setLogStatus, isLoadingAuth, handleSignup, handleLogin, pushToken }) => {
    const {
        names,
        tempName,
        setTempName,
        inputUser,
        setInputUser,
        inputPass,
        setInputPass,
        isLoadingNames
    } = useNames(logStatus, setLogStatus);

    if (isLoadingNames || isLoadingAuth) {
        return (
            <View style={styles.loadingcontainer}>
                <ActivityIndicator size="large" color="#532857" />
            </View>
        );
    }

    // Render different screens based on logStatus
    switch (logStatus) {
        case 'network_error':
            return (
                <View style={styles.networkErrorContainer}>
                    <View style={styles.errorContainer}>
                        <Text style={styles.errorMessage}>Network Error</Text>
                        <Text style={styles.error}>We're sorry, there is currently a network error. Please check your connection and try again.</Text>
                    </View>

                    <TouchableOpacity 
                        style={styles.signupButton}
                        onPress={() => {
                            setLogStatus("")
                        }}
                    >
                        <Text style={styles.signupText}>Go Back</Text>
                    </TouchableOpacity>
                </View>

                
            );
        case 'signup':
            return (
                <NameSelect
                    names={names}
                    tempName={tempName}
                    setTempName={setTempName}
                    setLogStatus={setLogStatus}
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
                    setLogStatus={setLogStatus}
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
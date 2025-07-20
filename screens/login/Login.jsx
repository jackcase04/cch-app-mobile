import { useState, useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { Landing, LoginInput, NameSelect, SignupInput } from '../../components';
import styles from './login.style';
import { getNames } from '../../services/choreService';

const Login = ({ setUserName, logStatus, setLogStatus, isLoadingAuth, handleSignup, handleLogin }) => {
    // UI state
    const [names, setNames] = useState([]);
    const [tempName, setTempName] = useState('');
    const [inputUser, setInputUser] = useState('');
    const [inputPass, setInputPass] = useState('');
    
    // Loading states
    const [isLoadingNames, setIsLoadingNames] = useState(false);

    // Fetch names when user navigates to signup
    const loadNames = async () => {
        setIsLoadingNames(true);
        try {
            const result = await getNames();
            
            if (result.success) {
                const sortedNames = result.data.map(item => item.name).sort();
                console.log("Names fetched:", sortedNames);
                setNames(sortedNames);
                
                // Set first name as default if none selected
                if (sortedNames.length > 0 && !tempName) {
                    setTempName(sortedNames[0]);
                }
            } else {
                console.error("Failed to load names:", result.message);
                // Could show an error message to user here
            }
        } catch (error) {
            console.error("Error loading names:", error);
        } finally {
            setIsLoadingNames(false);
        }
    };

    // Load names when user goes to signup screen
    useEffect(() => {
        if (logStatus === 'signup' && names.length === 0) {
            loadNames();
        }
    }, [logStatus]);

    // Show loading spinner when loading names or during auth
    if (isLoadingNames || isLoadingAuth) {
        return (
            <View style={styles.loadingcontainer}>
                <ActivityIndicator size="large" color="#532857" />
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
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import styles from './signupInput.style';
import { useAuthContext } from '../../contexts/AuthContext';

const SignupInput = ({ tempName, inputUser, inputPass, setinputUser, setInputPass }) => {
    const { handleSignup, setLogStatus } = useAuthContext();
    const [usernameFocused, setUsernameFocused] = useState(false);
    const [passwordFocused, setPasswordFocused] = useState(false);

    return (
        <View style={styles.container}>
            <Text style={styles.selectMessage}>Enter your signup info:</Text>
            
            <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Username</Text>
                <TextInput
                    placeholder="Enter your username"
                    value={inputUser}
                    onChangeText={text => setinputUser(text)}
                    onFocus={() => setUsernameFocused(true)}
                    onBlur={() => setUsernameFocused(false)}
                    style={[
                        styles.textInput,
                        usernameFocused && styles.textInputFocused
                    ]}
                    autoCapitalize="none"
                    autoCorrect={false}
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Password</Text>
                <TextInput
                    placeholder="Enter your password"
                    value={inputPass}
                    onChangeText={text => setInputPass(text)}
                    onFocus={() => setPasswordFocused(true)}
                    onBlur={() => setPasswordFocused(false)}
                    style={[
                        styles.textInput,
                        passwordFocused && styles.textInputFocused
                    ]}
                    secureTextEntry={true}
                    autoCapitalize="none"
                    autoCorrect={false}
                />
            </View>

                <TouchableOpacity 
                    style={styles.loginButton}
                    onPress={() => handleSignup(tempName, inputUser, inputPass)}
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
}

export default SignupInput;
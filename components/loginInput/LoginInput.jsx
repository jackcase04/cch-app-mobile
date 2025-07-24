import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './loginInput.style';
import { usePushToken } from '../../hooks/usePushToken';

const LoginInput = ({ inputUser, inputPass, setinputUser, setInputPass, handleLogin, setLogStatus }) => {
    const { pushToken } = usePushToken('');

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
                    onPress={() => handleLogin(inputUser, inputPass, pushToken)}
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

export default LoginInput;
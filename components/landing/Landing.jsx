import { View, Text, TouchableOpacity } from 'react-native';
import styles from './landing.style';

const Landing = ({ setLogStatus }) => {
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
                onPress={() => {
                    setLogStatus("login")
                }}
            >
                <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Landing;
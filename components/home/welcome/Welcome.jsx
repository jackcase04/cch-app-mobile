import { View, Text } from 'react-native';
import styles from './welcome.style';

// For now, this component only reneders a welcome message
// In the future, it can be used to display tabs that render other components for more features

const Welcome = ({ userName }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.welcomeMessage} >Welcome, {userName.split(' ')[0]}</Text>
            {/* TODO: Add tabs for more features*/}
        </View>
    )
}

export default Welcome;
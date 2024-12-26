import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import styles from './welcome.style';

const Welcome = ({ userName }) => {
    return (
        // TODO: Implement the Welcome component
        <View style={styles.container}>
            <Text style={styles.welcomeMessage} >Welcome {userName}</Text>
            <View style={styles.tabsContainer}>
                <TouchableOpacity style={styles.tab}>
                    <Text style={styles.tabText}>Chores</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Welcome;
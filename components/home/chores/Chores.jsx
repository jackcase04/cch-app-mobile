import { View, Text, FlatList } from 'react-native';
import styles from './chores.style';

const Chores = ({ choresData, userName }) => {
    // function to get the date in MM/DD format
    const getTodaysDate = () => {
        const today = new Date();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        return `${month}/${day}`;
    };

    // Filter chores by date and name
    const filteredChores = choresData.filter(chore => (chore.date === getTodaysDate() && chore.name === userName));

    if (filteredChores.length === 0) {
        return (
            <View style={styles.container}>
                <Text style={styles.choreMessage}>No chores for today!</Text>
            </View>
        )
    } else {
        return (
            <View style={styles.container}>
                <Text style={styles.choreMessage}>Your Chore today is:</Text>
                <FlatList
                    data={filteredChores}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <View>
                            <Text style={styles.chore}>{item.location}</Text>
                        </View>
                    )}
                />
            </View>
        )
    }
}

export default Chores;
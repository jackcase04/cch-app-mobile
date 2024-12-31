import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import styles from './welcome.style';

const Welcome = ({ userName, activeTab, setActiveTab }) => {
    const tabs = ["Chores"];

    return (
        <View style={styles.container}>
            <Text style={styles.welcomeMessage} >Welcome {userName}</Text>
            <View style={styles.tabsContainer}>
                <FlatList
                    data={tabs}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={styles.tab} onPress={() => setActiveTab(item)}>
                            <Text style={styles.tabText}>{item}</Text>
                        </TouchableOpacity>
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => item}
                />
            </View>

            

        </View>
    )
}

export default Welcome;
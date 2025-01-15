import { SafeAreaView, Button, View } from 'react-native';
import styles from './header.style';

const Header = ({ handleLogout, sendNotification}) => {
    return (
        <SafeAreaView>
            <View style={styles.button}>
                <Button title="Logout" onPress={handleLogout}/>
                <Button title="Noti" onPress={sendNotification}/>
            </View>
        </SafeAreaView>
    );
}

export default Header;
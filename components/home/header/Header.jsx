import { SafeAreaView, Button, View } from 'react-native';
import styles from './header.style';

const Header = ({ handleLogout }) => {
    return (
        <SafeAreaView>
            <View style={styles.button}>
                <Button title="Logout" onPress={handleLogout}/>
            </View>
        </SafeAreaView>
    );
}

export default Header;
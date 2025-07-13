import { SafeAreaView } from 'react-native';
import { Welcome, Chores, Header } from '../components';
import { Login } from '../screens';
import { Stack } from 'expo-router';
import { useAuth } from '../hooks/useAuth';

// This app allows users to select their name, see their chores, and schedule notifications for their chores

const Home = () => {
    const { userName, setUserName, handleLogout } = useAuth('');

    if (userName == '') {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <Stack.Screen
                    options={{
                        headerShown: false,
                        gestureEnabled: false
                    }}
                />

                <Login
                    setUserName={setUserName}
                />
                
            </SafeAreaView>
        )
    } else {
        return (
            // Main menu screen
            <SafeAreaView style={{ flex: 1 }}>
                <Stack.Screen
                    options={{
                        headerShown: false,
                        gestureEnabled: false
                    }}
                />
                <Header
                    handleLogout={handleLogout}
                    userName={userName}
                />
                <Welcome
                    userName={userName}
                />

                <Chores
                    userName={userName}
                />
                
            </SafeAreaView>
        )
    }

    
}

export default Home;
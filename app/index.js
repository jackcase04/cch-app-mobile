import { SafeAreaView } from 'react-native';
import { Header } from '../components';
import { Login, Dashboard } from '../screens';
import { Stack } from 'expo-router';
import { useAuth } from '../hooks/useAuth';

// This app allows users to select their name, see their chores, and schedule notifications for their chores

const Home = () => {
    const { 
        userName,
        setUserName,
        handleLogout,
        logStatus,
        setLogStatus,
        isLoadingAuth,
        handleSignup,
        handleLogin
    } = useAuth('');

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
                    logStatus={logStatus}
                    setLogStatus={setLogStatus}
                    isLoadingAuth={isLoadingAuth}
                    handleSignup={handleSignup}
                    handleLogin={handleLogin}
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
                
                <Dashboard
                    userName={userName}
                />
                
            </SafeAreaView>
        )
    }

    
}

export default Home;
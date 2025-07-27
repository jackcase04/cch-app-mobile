import { useState } from 'react';
import { SafeAreaView } from 'react-native';
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

    const [online, setOnline] = useState('');

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
                    setOnline={setOnline}
                    online={online}
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
                
                <Dashboard
                    userName={userName}
                    handleLogout={handleLogout}
                    online={online}
                    setOnline={setOnline}
                />
                
            </SafeAreaView>
        )
    }

    
}

export default Home;
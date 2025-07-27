import { SafeAreaView } from 'react-native';
import { Login, Dashboard } from '../screens';
import { Stack } from 'expo-router';
import { AuthProvider, useAuthContext } from '../contexts/AuthContext';
import { AppProvider, useAppContext } from '../contexts/AppContext';
import { LoadingProvider } from '../contexts/LoadingContext';

// This app allows users to select their name, see their chores, and schedule notifications for their chores

const AppContent = () => {
    const { 
        userName,
        setUserName,
        handleLogout,
        logStatus,
        setLogStatus,
        isLoadingAuth,
        handleSignup,
        handleLogin,
        loginError
    } = useAuthContext();

    const { online, setOnline } = useAppContext();

    if (userName == '') {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <Stack.Screen
                    options={{
                        headerShown: false,
                        gestureEnabled: false
                    }}
                />

                <Login />
                
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
                
                <Dashboard />
                
            </SafeAreaView>
        )
    }
}

const Home = () => {
    return (
        <LoadingProvider>
            <AuthProvider>
                <AppProvider>
                    <AppContent />
                </AppProvider>
            </AuthProvider>
        </LoadingProvider>
    );
};

export default Home;
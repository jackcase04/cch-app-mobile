import React from 'react';
import { Stack } from 'expo-router';

const Layout = () => {
    return <Stack 
        screenOptions={{
            headerShown: false,
            gestureEnabled: false
        }}
    />
}

export default Layout;
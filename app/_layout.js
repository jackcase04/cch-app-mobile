// Tries to load custom fonts, falls back to system fonts if needed

import { Stack } from 'expo-router';
import { useCallback, useState, useEffect } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

const Layout = () => {
    const [fontsLoaded] = useFonts({
        DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
        DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
        DMRegular: require('../assets/fonts/DMSans-Regular.ttf'),
    });

    const [useFallbackFont, setUseFallbackFont] = useState(false);

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        } else if (useFallbackFont) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded, useFallbackFont]);

    useEffect(() => {
        // If fonts fail to load within a timeout, fallback to system fonts
        const fallbackTimeout = setTimeout(() => {
            if (!fontsLoaded) {
                setUseFallbackFont(true);
            }
        }, 5000); // 5 seconds timeout for font loading

        return () => clearTimeout(fallbackTimeout);
    }, [fontsLoaded]);

    if (!fontsLoaded && !useFallbackFont) {
        return null; // Show nothing until fonts load or fallback is triggered
    }

    return (
        <Stack
            screenOptions={{
                headerStyle: { fontFamily: useFallbackFont ? 'System' : 'DMRegular' },
                headerTitleStyle: { fontFamily: useFallbackFont ? 'System' : 'DMBold' },
                contentStyle: { fontFamily: useFallbackFont ? 'System' : 'DMRegular' },
            }}
            onLayout={onLayoutRootView}
        />
    );
};

export default Layout;
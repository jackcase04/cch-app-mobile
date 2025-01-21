import { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Stack } from 'expo-router';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

// This layout file is used to make sure the user loading screen is smooth
// It will show the splash screen until the fonts are loaded
// Then fades in smoothly

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const [isReady, setIsReady] = useState(false);
    const [fontsLoaded] = useFonts({
        DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
        DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
        DMRegular: require('../assets/fonts/DMSans-Regular.ttf'),
    });

    const [useFallbackFont, setUseFallbackFont] = useState(false);

    useEffect(() => {
        // If fonts fail to load within a timeout, fallback to system fonts
        const fallbackTimeout = setTimeout(() => {
            if (!fontsLoaded) {
                setUseFallbackFont(true);
            }
        }, 5000);

        return () => clearTimeout(fallbackTimeout);
    }, [fontsLoaded]);

  useEffect(() => {
    async function prepare() {
      try {
        await new Promise(resolve => setTimeout(resolve, 150));
      } finally {
        setIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = async () => {
    if (isReady && (fontsLoaded || useFallbackFont)) {
      await SplashScreen.hideAsync();
    }
  };

  if (!isReady || (!fontsLoaded && !useFallbackFont)) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <Stack
        screenOptions={{
            headerStyle: { fontFamily: useFallbackFont ? 'System' : 'DMRegular' },
            headerTitleStyle: { fontFamily: useFallbackFont ? 'System' : 'DMBold' },
            contentStyle: { fontFamily: useFallbackFont ? 'System' : 'DMRegular' },
            animation: 'fade',
            headerShown: false,
            animationDuration: 500,
            presentation: 'transparentModal',
            contentStyle: { backgroundColor: 'white' }
        }}
      >
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="login/login_screen" options={{ headerShown: false }} />
      </Stack>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
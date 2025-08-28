import { useEffect, useState, useCallback } from 'react';
import { registerForPushNotificationsAsync } from '../services/notificationService';

export const usePushToken = () => {
    const [pushToken, setPushToken ] = useState('');

    const refreshPushToken = useCallback(async () => {
        try {
            console.log('Refreshing push token...');
            const token = await registerForPushNotificationsAsync();
            setPushToken(token);
            console.log('Push token refreshed successfully');
            return token;
        } catch (error) {
            console.log('Failed to refresh push token:', error);
            return null;
        }
    }, []);

    useEffect(() => {
        const initNotifications = async () => {
            try {
                const token = await registerForPushNotificationsAsync();
                // console.log("Received: " + token);
                setPushToken(token);
            } catch (error) {
                console.log('Failed to get push token:', error);
            }
        };

        initNotifications();
    }, []);

    return {
        pushToken,
        refreshPushToken
    };
}
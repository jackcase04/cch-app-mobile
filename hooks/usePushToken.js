import { useEffect, useState } from 'react';
import { registerForPushNotificationsAsync } from '../services/notificationService';

export const usePushToken = () => {
    const [pushToken, setPushToken ] = useState('');

    useEffect(() => {
        const initNotifications = async () => {
            try {
                const token = await registerForPushNotificationsAsync();
                console.log("Received: " + token);
                setPushToken(token);
            } catch (error) {
                console.log('Failed to get push token:', error);
            }
        };

        initNotifications();
    }, []);

    return {
        pushToken
    };
}
import * as Notifications from 'expo-notifications';
import { scheduleNotifications } from './notificationService';

export const useNotifications = (choresData) => {
    const handleNotifications = async () => {
        try {
            await scheduleNotifications(choresData);
        } catch (error) {
            console.error('Failed to send notification:', error);
        }
    };

    const clearNotifications = async () => {
        try {
            await Notifications.cancelAllScheduledNotificationsAsync();
            console.log('Notifications cleared (from clearNotifications)');
        } catch (error) {
            console.error('Failed to clear notifications:', error);
        }
    };

    return { handleNotifications, clearNotifications };
}
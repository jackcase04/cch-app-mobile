import * as Notifications from 'expo-notifications';
import { scheduleNotifications } from './notificationService';

// This hook is used to allow notifications to be scheduled and cleared

export const useNotifications = (choresData) => {

    // schedules notifications
    const handleNotifications = async () => {
        try {
            await scheduleNotifications(choresData);
        } catch (error) {
            console.error('Failed to send notification:', error);
        }
    };

    // clears notifications
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
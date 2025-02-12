import * as Notifications from 'expo-notifications';
import { scheduleNotifications } from './notificationService';

// This hook is used to allow notifications to be scheduled and cleared

export const useNotifications = () => {

    // schedules notifications
    const handleNotifications = async () => {
        try {
            await scheduleNotifications();
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
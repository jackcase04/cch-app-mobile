import * as Notifications from 'expo-notifications';
import { convertToNotificationTrigger } from '../utils';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Initialize notifications
export const initNotifications = () => {
    Notifications.setNotificationHandler({
        handleNotification: async () => ({
          shouldShowAlert: true,
          shouldPlaySound: true,
          shouldSetBadge: false,
        }),
    });
}

// Schedule notifications for chores
export const scheduleNotifications = async (choresData) => {
    await Notifications.cancelAllScheduledNotificationsAsync();

    const name = await AsyncStorage.getItem('name');
    const reminder = await AsyncStorage.getItem('reminder');

    const chores = choresData.filter(chore => (
        chore.name === name
    ));
        
    for (const chore of chores) {
        try {
            const trigger = convertToNotificationTrigger(reminder, chore.date);

            if (trigger && (trigger > new Date())) {
                await Notifications.scheduleNotificationAsync({
                    content: {
                        title: "You have 1 chore today",
                        body: chore.location,
                    },
                    trigger,
                });
            }
        } catch {
            console.error('Failed to schedule notification');
        }
    }
};
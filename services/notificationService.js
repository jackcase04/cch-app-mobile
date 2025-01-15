import * as Notifications from 'expo-notifications';
import { convertToNotificationTrigger, filterFutureChores } from '../utils';
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
    try {
        await Notifications.cancelAllScheduledNotificationsAsync();

        const name = await AsyncStorage.getItem('name');
        const reminder = await AsyncStorage.getItem('reminder');

        // Only chores that correspond with the user and are in the future/today
        const chores = filterFutureChores(choresData, reminder, name);
            
        console.log(`Found ${chores.length} upcoming chores for ${name}`);

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
                    console.log(`Scheduled notification for ${chore.date} at ${reminder}: ${chore.location}`);
                }
            } catch {
                console.error('Failed to schedule notification');
            }
        }
    } catch (error) {
        console.error('Failed to schedule notifications');
    }
};

export const verifyAndRescheduleNotifications = async (choresData) => {
    try {
        const name = await AsyncStorage.getItem('name');
        const reminder = await AsyncStorage.getItem('reminder');
        if (name && reminder) {
            const scheduledNotifications = await Notifications.getAllScheduledNotificationsAsync();
            console.log(`Found ${scheduledNotifications.length} scheduled notifications`);

            // Only chores that correspond with the user and are in the future/today
            const chores = filterFutureChores(choresData, reminder, name);
            console.log(`Found ${chores.length} upcoming chores for ${name}`);

            if (scheduledNotifications.length !== chores.length) {
                console.log('Mismatch found, Rescheduling notifications');
                console.log(`Expected: ${chores.length}, Actually scheduled: ${scheduledNotifications.length}`);

                await scheduleNotifications(choresData);
                const afterReschedule = await Notifications.getAllScheduledNotificationsAsync();
                console.log('Notifications after rescheduling:', afterReschedule.length);
            } else {
                console.log('No mismatch found, no need to reschedule');
            }
                
        } else {
            console.log('No name or reminder found');
        }
    } catch (error) {
        console.error('Failed to verify and reschedule notifications');
    }
}

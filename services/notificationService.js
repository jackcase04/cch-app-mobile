import * as Notifications from 'expo-notifications';
import { convertToNotificationTrigger, filterFutureChores } from '../utils';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform, Alert, Linking } from 'react-native';

// This file is responsible for setting up and managing local notifications
// It uses Expo Notifications to schedule and manage notifications
// Also tries to reschedule notifications if the user's chores change

// Initialize notifications
Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: false,
        priority: Platform.OS === 'android' ? 'max' : 'high',
    }),
});

// Android only
const createNotificationChannel = async () => {
    if (Platform.OS === 'android') {
        await Notifications.setNotificationChannelAsync('chores', {
            name: 'Chore Reminders',
            importance: Notifications.AndroidImportance.MAX,
            vibrationPattern: [0, 250, 250, 250],
            lockscreenVisibility: Notifications.AndroidNotificationVisibility.PUBLIC,
        });
    }
};

// Get notification permissions and request if not granted
export const setupLocalNotifications = async () => {
    try {
      await createNotificationChannel();

      // Check existing permission status
      const { status: existingStatus } = await Notifications.getPermissionsAsync();
      
      // request permission if not granted
      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync({
          ios: {
            allowAlert: true,
            allowBadge: true,
            allowSound: true,
          },
        });
        
        if (status !== 'granted') {
          Alert.alert(
            'Notifications Required',
            'Please enable notifications in your device settings to receive important updates.',
            [
              { text: 'Cancel', style: 'cancel' },
              { 
                text: 'Open Settings',
                onPress: () => {
                  if (Platform.OS === 'ios') {
                    Linking.openURL('app-settings:');
                  } else {
                    Linking.openSettings();
                  }
                }
              }
            ]
          );
        }
      } else {
        console.log('Notifications permissions already granted');
      }
      
      return existingStatus;
      
    } catch (error) {
      console.error('Error setting up local notifications:', error);
      return null;
    }
};

// Schedule notifications for chores
export const scheduleNotifications = async (choresData) => {
    try {
        await Notifications.cancelAllScheduledNotificationsAsync();
        console.log('Cleared all scheduled notifications (from scheduleNotifications)');

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
                            android: {
                                channelId: 'chores',
                                importance: Notifications.AndroidImportance.MAX,
                            }
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

// Check if notifications are scheduled for each upcoming chore and reschedule them if not
export const verifyAndRescheduleNotifications = async (choresData) => {
    try {
        const name = await AsyncStorage.getItem('name');
        const reminder = await AsyncStorage.getItem('reminder');
        const storedSwitch = await AsyncStorage.getItem('switch');

        if (name && reminder && storedSwitch === 'true') {
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
            console.log('Reminder not set, skipping rescheduling');
        }
    } catch (error) {
        console.error('Failed to verify and reschedule notifications');
    }
}

import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Similar to the reminder hook, this hook manages the switch state
// stores the switch state in async storage

export const useSwitch = () => {
    const [switchEnabled, setSwitchEnabled] = useState(false);
    const [isSwitchLoading, setIsSwitchLoading] = useState(true);

    // gets stored switch state
    useEffect(() => {
      let isMounted = true;

      const getSwitch = async () => {
          try {
              const storedSwitch = await AsyncStorage.getItem('switch');
              if (isMounted) {
                  setSwitchEnabled(storedSwitch === 'true');
              }
          } catch (error) {
              if (isMounted) {
                  console.error('Error retrieving switch:', error);
              }
          } finally {
              if (isMounted) {
                  setIsSwitchLoading(false);
              }
          }
      };

      getSwitch();

      return () => {
          isMounted = false;
      };
  }, []);

    // stores switch state
    useEffect(() => {
        if (isSwitchLoading) {
            return;
        }

        const storeSwitch = async () => {
            try {
                    await AsyncStorage.setItem('switch', switchEnabled.toString());
            } catch (error){
                console.error('Error storing switch:', error);
            }
        }
        storeSwitch();
    }, [switchEnabled, isSwitchLoading]);

    return { switchEnabled, setSwitchEnabled, isSwitchLoading };
}
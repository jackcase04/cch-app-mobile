import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useSwitch = () => {
    const [switchEnabled, setSwitchEnabled] = useState(false);
    const [isSwitchLoading, setIsSwitchLoading] = useState(true);

    // gets stored reminder
    useEffect(() => {
        let isMounted = true;

        const getSwitch = async () => {
            try {
                const storedSwitch = await AsyncStorage.getItem('switch');
                if (isMounted) {
                    setSwitchEnabled(storedSwitch === 'true');
                    setIsSwitchLoading(false);
                }
            } catch (error) {
                console.error('Error retrieving switch:', error);
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

    // stores reminder
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
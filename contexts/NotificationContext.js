import React, { createContext, useContext } from 'react';
import { usePushToken } from '../hooks/usePushToken';

const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
    const { pushToken, refreshPushToken } = usePushToken();
    
    return (
        <NotificationContext.Provider value={{ pushToken, refreshPushToken }}>
            {children}
        </NotificationContext.Provider>
    );
};

export const useNotificationContext = () => {
    const context = useContext(NotificationContext);
    if (!context) {
        throw new Error('useNotificationContext must be used within a NotificationProvider');
    }
    return context;
};
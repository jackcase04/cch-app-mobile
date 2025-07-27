import { useState, useEffect } from 'react';
import { getHealth } from '../services/healthService';

export const useHealth = (setOnline, logStatus) => {
    // Loading states
    const [isLoading, setIsLoading] = useState(false);

    // Fetch names when user navigates to signup
    const checkHealth = async () => {
        setIsLoading(true);
        try {
            const result = await getHealth();
            
            if (result.success) {
                console.log("health check success!");
                setOnline(true);
            } else {
                console.log("health check was a fail.");
                setOnline(false);
            }
        } catch (error) {
            console.error("Error checking health", error);
        } finally {
            setIsLoading(false);
        }
    };

    // Load names when user goes to login screen
    useEffect(() => {
        if (logStatus === 'login') {
            checkHealth();
        }
    }, [logStatus]);

    return {
        isLoading
    }
};
import { useState, useEffect } from 'react';
import { getHealth } from '../services/healthService';
import { useLoading } from '../contexts/LoadingContext';

export const useHealth = (setOnline, logStatus) => {
    const { withLoading } = useLoading();

    // Fetch names when user navigates to signup
    const checkHealth = async () => {
        await withLoading('health-check', async () => {
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
                setOnline(false);
            }
        });
    };

    // Load names when user goes to login screen
    useEffect(() => {
        if (logStatus === 'login') {
            checkHealth();
        }
    }, [logStatus]);

    return {
        // No longer need to return loading state - it's centralized
    }
};
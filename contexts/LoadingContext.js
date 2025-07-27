import React, { createContext, useContext, useState, useCallback } from 'react';

const LoadingContext = createContext();

export const LoadingProvider = ({ children }) => {
    const [loadingTasks, setLoadingTasks] = useState(new Set());

    // Add a loading task
    const startLoading = useCallback((taskId) => {
        setLoadingTasks(prev => new Set([...prev, taskId]));
    }, []);

    // Remove a loading task
    const stopLoading = useCallback((taskId) => {
        setLoadingTasks(prev => {
            const newSet = new Set(prev);
            newSet.delete(taskId);
            return newSet;
        });
    }, []);

    // Check if any tasks are loading
    const isLoading = loadingTasks.size > 0;

    // Check if a specific task is loading
    const isTaskLoading = useCallback((taskId) => {
        return loadingTasks.has(taskId);
    }, [loadingTasks]);

    // Async wrapper that automatically manages loading state
    const withLoading = useCallback(async (taskId, asyncFunction) => {
        startLoading(taskId);
        try {
            const result = await asyncFunction();
            return result;
        } finally {
            stopLoading(taskId);
        }
    }, [startLoading, stopLoading]);

    return (
        <LoadingContext.Provider value={{
            isLoading,
            isTaskLoading,
            startLoading,
            stopLoading,
            withLoading,
            activeTasks: Array.from(loadingTasks) // For debugging
        }}>
            {children}
        </LoadingContext.Provider>
    );
};

export const useLoading = () => {
    const context = useContext(LoadingContext);
    if (!context) {
        throw new Error('useLoading must be used within a LoadingProvider');
    }
    return context;
};
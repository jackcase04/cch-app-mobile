import { useState, useEffect } from 'react';
import { getNames } from '../services/nameService';
import { useLoading } from '../contexts/LoadingContext';

export const useNames = (logStatus, setLogStatus, setOnline) => {
    const { withLoading } = useLoading();
    
    // UI state
    const [names, setNames] = useState([]);
    const [tempName, setTempName] = useState('');
    const [inputUser, setInputUser] = useState('');
    const [inputPass, setInputPass] = useState('');

    // Fetch names when user navigates to signup
    const loadNames = async () => {
        await withLoading('load-names', async () => {
            try {
                const result = await getNames();
                
                if (result.success) {
                    const sortedNames = result.data.map(item => item.name).sort();
                    console.log("Names fetched:", sortedNames);
                    setNames(sortedNames);
                    
                    // Set first name as default if none selected
                    if (sortedNames.length > 0 && !tempName) {
                        setTempName(sortedNames[0]);
                    }

                    setOnline(true);
                } else {
                    console.log("Failed to load names:", result.message);
                    setOnline(false);
                }
            } catch (error) {
                console.error("Error loading names:", error);
                setOnline(false);
            }
        });
    };

    // Load names when user goes to signup screen
    useEffect(() => {
        if (logStatus === 'signup') {
            loadNames();
        }
    }, [logStatus]);

    return {
        names,
        tempName,
        setTempName,
        inputUser,
        setInputUser,
        inputPass,
        setInputPass
    }
};
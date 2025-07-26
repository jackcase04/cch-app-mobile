import { useState, useEffect } from 'react';
import { getNames } from '../services/nameService';

export const useNames = (logStatus, setLogStatus) => {
    // UI state
    const [names, setNames] = useState([]);
    const [tempName, setTempName] = useState('');
    const [inputUser, setInputUser] = useState('');
    const [inputPass, setInputPass] = useState('');
    
    // Loading states
    const [isLoadingNames, setIsLoadingNames] = useState(false);

    // Fetch names when user navigates to signup
    const loadNames = async () => {
        setIsLoadingNames(true);
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
            } else {
                console.log("Failed to load names:", result.message);
                
                setLogStatus('network_error');
            }
        } catch (error) {
            console.error("Error loading names:", error);
        } finally {
            setIsLoadingNames(false);
        }
    };

    // Load names when user goes to signup screen
    useEffect(() => {
        if (logStatus === 'signup' && names.length === 0) {
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
        setInputPass,
        isLoadingNames
    }
};
import { useState } from 'react';

export default function usePersistedState(key, defaultValue) {
    const [state, setState] = useState(() => {
        const persistedState = localStorage.getItem(key);

        if (persistedState) {
            try {
                // Try parsing the stored value
                return JSON.parse(persistedState);
            } catch (error) {
                // If parsing fails, log the error and return the default value
                console.error(`Error parsing the persisted state for key "${key}":`, error);
                return defaultValue;
            }
        }

        return defaultValue;
    });

    const setPersistedState = (value) => {
        let newValue;

        // Support for functional updates
        if (typeof value === 'function') {
            newValue = value(state);
        } else {
            newValue = value;
        }

        // Update local state
        setState(newValue);

        // Persist to localStorage
        localStorage.setItem(key, JSON.stringify(newValue));
    };

    return [state, setPersistedState];
}

// Hooks/useTabs.ts
import { useState, SyntheticEvent } from "react";

interface UseTabsReturn {
    value: number;
    handleChange: (event: SyntheticEvent, newValue: number) => void;
}

export const useTabs = (initialValue: number = 0): UseTabsReturn => {
    const [value, setValue] = useState(initialValue);

    const handleChange = (event: SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return { value, handleChange };
};

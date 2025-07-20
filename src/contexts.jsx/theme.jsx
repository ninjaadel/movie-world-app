import { createContext, useEffect } from "react";
import  { useState } from 'react';

export const ThemeContext = createContext();




export function ThemeProvider({ children }) {
     const localTheme = localStorage.getItem("theme") || 'light';
    const [theme, setTheme] = useState(localTheme)
   

   useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

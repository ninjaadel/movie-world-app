import  { useContext } from 'react';
import { ThemeContext } from './theme';
import { useState } from 'react';
export function ThemeSelector () {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        setTheme(prev => prev === "dark" ? "light" : "dark");
    }
    return (
        <div>
            <button onClick={toggleTheme} className={`btn btn-${theme === "light" ? "light" : "dark"} border`} style={{ width: 40, height: 40, padding: 0 }}
                aria-label="Tema değiştir">
                <i className={`bi bi-${theme === "dark" ? "sun" : "moon"}`} style={{ color: theme === "dark" ? "yellow" : "blue" }} />
            </button>
        </div>
    );
}
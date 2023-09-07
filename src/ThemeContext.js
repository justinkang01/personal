import React, { createContext, useState } from 'react';

const ThemeContext = createContext();

const ThemeContextProvider = props => {
    const [theme, setTheme] = useState('light');

    const changeTheme = () => {
        const changeHelper = {
            dark: 'light',
            light: 'dark',
        };
        setTheme(changeHelper[theme]);
    };

    return (
        <div>
            <ThemeContext.Provider value={{ theme, changeTheme }}>{props.children}</ThemeContext.Provider>
        </div>
    );
};

export { ThemeContext, ThemeContextProvider };

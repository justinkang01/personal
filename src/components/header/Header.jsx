import React, { useState } from 'react';
import Button from '../common/Button';
import '../common/main.scss';
import styles from './header.module.scss';

const items = [
    { text: 'about', style: 'small' },
    { text: 'projects', style: 'small' },
];

const headerButtons = items.map((item, index) => {
    const { text, style } = item;
    return <Button text={text} style={style} key={index} />;
}, []);

const Header = () => {
    const [theme, setTheme] = useState('dark');

    const changeTheme = currTheme => {
        const changeHelper = {
            dark: 'light',
            light: 'dark',
        };
        return changeHelper[currTheme];
    };

    return (
        <div className={`${styles['headerContainer']} ${styles[changeTheme(theme)]}`}>
            {headerButtons}
            Change Theme: <Button text={theme} onClick={() => setTheme(changeTheme(theme))} />
        </div>
    );
};
export default Header;

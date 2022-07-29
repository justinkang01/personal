import React, { useState } from 'react';
import Button from '../common/Button';
import '../common/main.scss';
import styles from './header.module.scss';

const items = [
    { text: 'about', style: 'large' },
    { text: 'projects', style: 'large' },
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
        <div className={`${styles['headerContainer']} ${changeTheme(theme)}`}>
            <div className={styles['headerWrapper']}>
                <div>home</div>
                <div className={styles.items}>
                    {headerButtons}
                    <Button text={theme} onClick={() => setTheme(changeTheme(theme))} />
                </div>
            </div>
        </div>
    );
};
export default Header;

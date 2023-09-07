import React, { useContext } from 'react';
import { ThemeContext } from '../../ThemeContext';
import Button from '../common/Button';
import '../common/main.scss';
import styles from './header.module.scss';

const Header = () => {
    const { theme, changeTheme } = useContext(ThemeContext);
    const getIcon = theme => ({ dark: '🌜', light: '🌞' }[theme]);

    return (
        <div className={`${styles['headerContainer']} ${theme}`}>
            <h2>Justin Kang</h2>
            <div className={styles['theme']}>
                <Button text={getIcon(theme)} onClick={() => changeTheme(theme)} style={`${theme}`} />
            </div>
        </div>
    );
};
export default Header;

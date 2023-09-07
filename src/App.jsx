import React, { useEffect, useState, useContext } from 'react';
import About from 'components/about/About';
import { useWindowDimensions } from 'components/utils';
import { ThemeContext } from './ThemeContext';
import Header from './components/header/Header';
import styles from './App.module.scss';

function App() {
    const [isMobile, setMobile] = useState(false);
    const windowSize = useWindowDimensions();
    const { theme } = useContext(ThemeContext);
    useEffect(() => {
        if (windowSize.width <= 800) {
            setMobile(true);
        } else {
            setMobile(false);
        }
    }, [windowSize]);

    return isMobile ? (
        <div className="mobile">
            <div>Sorry! Mobile development is in progress. In the meantime, use a desktop to view this website.</div>
        </div>
    ) : (
        <div className={`${styles.app} ${theme}`}>
            <Header />
            <div className={styles.sections}>
                <About />
            </div>
        </div>
    );
}

export default App;

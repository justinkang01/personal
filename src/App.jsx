import React, { useEffect, useState } from 'react';
import About from 'components/about/About';
import Projects from 'components/projects/Projects';
import { useWindowDimensions } from 'components/utils';
import Header from './components/header/Header';
import './App.scss';

function App() {
    const [isMobile, setMobile] = useState(false);
    const windowSize = useWindowDimensions();

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
        <div className="app">
            <Header />
            <div className="sections">
                <About />
                <Projects />
            </div>
        </div>
    );
}

export default App;

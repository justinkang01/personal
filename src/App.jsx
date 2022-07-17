import React from 'react';
import About from 'components/about/About';
import Projects from 'components/projects/Projects';
import Header from './components/header/Header';
import './App.scss';

function App() {
    return (
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

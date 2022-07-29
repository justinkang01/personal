import React, { useCallback, useEffect, useLayoutEffect, useState } from 'react';
import classnames from 'classnames/bind';
import getWindowDimensions from 'components/utils';
// import logo from 'logo.svg';
import data from './data';
import styles from './about.module.scss';

const classNameBuilder = classnames.bind(styles);

/**
 * Bubble is a component that will generate a content "bubble"
 *
 * @param {number} size - The size of the bubble to be generated
 * @param {object} data - The image and text data to be displayed
 * @param {number} index - The index of the bubble, to be used for positioning
 */
const Bubble = ({ size, data, index }) => {
    const { text, imgSrc, alt } = data;
    const style = {
        width: `${size}px`,
        height: `${size}px`,
    };
    const textStyle = {
        height: `${size}px`,
        width: '50%',
    };

    return (
        <div className={styles['bubbleContainer']}>
            <div style={style} className={classNameBuilder(styles.bubble)}>
                <img alt={alt} src={imgSrc} />
            </div>
            <div style={textStyle} className={styles.bubbleText}>
                {text}
            </div>
        </div>
    );
};

const initWindowDimensions = getWindowDimensions();

/**
 * @returns The About page
 */
const About = () => {
    const [windowSize, setWindowSize] = useState(initWindowDimensions);
    const size = Math.min(windowSize.width, windowSize.height) / data.length;
    const [bubbleSize, setBubbleSize] = useState(size);

    const resizeCallback = useCallback(() => {
        setWindowSize(getWindowDimensions());
    }, [setWindowSize]);

    // checks to see if the window is being resized and sets the window state
    useEffect(() => {
        window.addEventListener('resize', resizeCallback);
        return () => window.removeEventListener('resize', resizeCallback);
    }, [resizeCallback]);

    // theoretically, whenever the windowSize changes, this should change the size of the bubbles to match
    useLayoutEffect(() => {
        const bSize = Math.min(windowSize.width, windowSize.height) / data.length;
        setBubbleSize(bSize);
    }, [windowSize]);

    /**
     * @todo change the styling of a bubble based on flex direction
     */
    return (
        <div className={styles.aboutContainer}>
            {data.map((data, index) => {
                return <Bubble size={bubbleSize} data={data} key={index} />;
            })}
        </div>
    );
};

export default About;

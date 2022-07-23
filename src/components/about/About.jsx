import React, { useCallback, useEffect, useLayoutEffect, useState } from 'react';
import classnames from 'classnames/bind';
import { getWindowDimensions, useImage, useWindowDimensions } from 'components/utils';
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
    const { loading, error, image } = useImage(imgSrc);

    useEffect(() => {
        if (error) {
            return <div>{error}</div>;
        }
    }, [error]);

    return (
        <div className={styles['bubbleContainer']}>
            <div style={style} className={classNameBuilder(styles.bubble, { evenRow: index % 2 })}>
                {loading ? <div className={styles.loader}>loading image...</div> : <img alt={alt} src={image} />}
            </div>
            <div style={textStyle} className={styles.bubbleText}>
                {text}
            </div>
        </div>
    );
};

/**
 * @returns The About page
 */
const About = () => {
    const windowSize = useWindowDimensions();
    const size = Math.min(windowSize.width, windowSize.height) / data.length;
    const [bubbleSize, setBubbleSize] = useState(size);

    // theoretically, whenever the windowSize changes, this should change the size of the bubbles to match
    useLayoutEffect(() => {
        const bSize = Math.min(windowSize.width, windowSize.height) / data.length;
        setBubbleSize(bSize);
    }, [windowSize]);

    /**
     * @todo currently, statically render in bubbles based on data.
     * in future, want to update the look of the site to render in bubbles
     * and onhover and onclick changes the about section.
     *
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

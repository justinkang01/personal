import React, { useEffect } from 'react';
import classnames from 'classnames/bind';
import { useImage } from 'components/utils';
import styles from './button.module.scss';

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

Bubble.propTypes = {
    size: PropTypes.number,
    data: PropTypes.Object,
    index: PropTypes.number,
};

export default Bubble;

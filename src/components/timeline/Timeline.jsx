import React from 'react';
import styles from './timeline.module.scss';

const data = ['test1', 'test2', 'test3'];
const Timeline = () => {
    return (
        <div className={styles.timelineContainer}>
            <div className={styles.timelineWrapper}>
                {data.map((elm, idx) => (
                    <div className={styles.item} key={idx}>
                        {elm}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Timeline;

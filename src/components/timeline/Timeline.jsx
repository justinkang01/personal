import React, { useEffect, useRef, useState } from 'react';
import { useWindowDimensions } from 'components/utils';
import styles from './timeline.module.scss';

const data = ['2001', '2019', '2022', '2023'];
const Timeline = () => {
    const windowDimen = useWindowDimensions();
    const windowWidth = windowDimen.width;
    const START_YEAR = 2001;
    const END_YEAR = 2023;
    const zeroHorRef = useRef(null);
    const zeroYearRef = useRef(null);
    const containerRef = useRef(null);
    const [horPadding, setHorPadding] = useState(0);
    const [yearPadding, setYearPadding] = useState(0);
    const [containerWidth, setContainerWidth] = useState(0);

    useEffect(() => {
        setHorPadding(zeroHorRef.current.offsetWidth);
        setYearPadding(zeroYearRef.current.offsetWidth);
        setContainerWidth(containerRef.current.offsetWidth);
    }, [windowWidth]);

    const find_style = (yr, idx) => {
        const yearsBetween = END_YEAR - START_YEAR;
        const relPosPercentage = ((yr - START_YEAR) / yearsBetween) * 320; // mult by height of timeline
        const vertical = relPosPercentage + 10;
        const horizontal =
            idx % 2 === 0
                ? { left: containerWidth / 2 - (horPadding + yearPadding), flexDirection: 'row-reverse' }
                : { left: containerWidth / 2, flexDirection: 'row' };
        return { top: vertical, ...horizontal };
    };
    return (
        <div className={styles.timelineContainer}>
            <div className={styles.timelineWrapper}>
                <h1>.timeline</h1>
                <div className={styles.timeline} ref={containerRef}>
                    <div className={styles.crl0}></div>
                    <div className={styles.vl}></div>
                    <div className={styles.crl1}></div>
                    <div className={styles.crl2}></div>
                    <div className={styles.crl3}></div>
                    {data.map((elm, idx) => {
                        const horRefProp = idx === 0 ? { ref: zeroHorRef } : {};
                        const yearRefProp = idx === 0 ? { ref: zeroYearRef } : {};
                        const padding = 10;
                        return (
                            <div className={styles.item} key={idx} style={find_style(parseInt(elm), idx)}>
                                <div className={styles.hor} {...horRefProp}></div>
                                <div
                                    className={styles.year}
                                    style={idx % 2 === 0 ? { paddingRight: padding } : { paddingLeft: padding }}
                                    {...yearRefProp}
                                >
                                    {elm}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className={styles.experience}></div>
        </div>
    );
};

export default Timeline;

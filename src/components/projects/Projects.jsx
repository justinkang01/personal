import React, { useState, useEffect } from 'react';
import Button from 'components/common/Button';
import { useImage } from 'components/utils';
import monopoly from '../../monopoly.png';
import data from './data';
import '../common/main.scss';
import styles from './projects.module.scss';

const CarouselItem = ({ data, idx, active }) => {
    const { src, alt, desc } = data;

    const { loading, error, image } = useImage(src);

    useEffect(() => {
        if (error) return <div>{error}</div>;
    }, [error]);

    return loading ? (
        <div>loading image</div>
    ) : (
        <div key={idx} className={`${styles.carouselItem} ${active ? styles['active'] : ''}`}>
            <img className={styles.img} src={`${image}`} alt={alt} />
            <div className={styles.desc}>{desc}</div>
        </div>
    );
};

const Carousel = ({ data }) => {
    const [activeIdx, setIdx] = useState(0);
    const handleNext = () => {
        setIdx(prevId => (prevId === data.length - 1 ? 0 : (prevId + 1) % data.length));
    };
    const handlePrev = () => {
        setIdx(prevId => (prevId === 0 ? data.length - 1 : prevId - 1));
    };
    return (
        <div className={styles.carouselWrapper}>
            <div className={styles.carouselItems}>
                {data.map((elm, idx) => {
                    return <CarouselItem data={elm} key={idx} active={idx === activeIdx} />;
                })}
            </div>
            <div className={styles.pagination}>
                <Button cn="xSmall" onClick={handlePrev} text="<" />
                {data.map((_, idx) => (
                    <button
                        key={idx}
                        className={`${styles.paginationIndicator} ${idx === activeIdx ? styles['active'] : ''}`}
                        onClick={() => setIdx(idx)}
                    ></button>
                ))}
                <Button cn="xSmall" onClick={handleNext} text=">" />
            </div>
        </div>
    );
};

const Projects = () => {
    return (
        <div className={styles.projectContainer}>
            <h1>.projects</h1>
            <Carousel data={data} />
            {/* <img src={monopoly} /> */}
        </div>
    );
};

export default Projects;

import React, { useState, useCallback } from 'react';
import Button from 'components/common/Button';
import '../common/main.scss';
import styles from './projects.module.scss';

const data = [
    {
        src: 'test',
        alt: 'Monopoly',
        desc: 'For this project, a focus on functional programming was emphasized. Created for a final project for one of my undergraduate courses, what started off as a text-adventure game turned into an online version of the popular board game: Monopoly. With over 3000 lines of codes and a testing coverage of over 90%, this project was the gateway to learn about high intenisty project building and collaborating with teammates.',
    },
    {
        src: 'test2',
        alt: 'Website',
        desc: 'This website is the culmination of my wanting of learning new things. What started off as a basic HTML/CSS static page, it was tranformed into a single page application based in ReactJS. The purpose of this project is to keep myself improving on as many levels as possible and to keep my learning experience engaged.',
    },
];
const Carousel = ({ data }) => {
    const [activeIdx, setIdx] = useState(0);
    const handleNext = useCallback(() => {
        setIdx(prevId => (prevId === data.length - 1 ? 0 : (prevId + 1) % data.length));
    }, [data.length]);
    const handlePrev = useCallback(() => {
        setIdx(prevId => (prevId === 0 ? data.length - 1 : prevId - 1));
    }, [data.length]);

    return (
        <div className={styles.carouselWrapper}>
            <div className={styles.carouselItems}>
                {data.map((elm, idx) => (
                    <div key={idx} className={`${styles.carouselItem} ${idx === activeIdx ? styles['active'] : ''}`}>
                        <img src={elm.src} alt={elm.alt} />
                        <div>{elm.desc}</div>
                    </div>
                ))}
            </div>
            <Button style="xSmall" onClick={handlePrev} text="<" />

            <div className={styles.pagination}>
                {data.map((_, idx) => (
                    <button
                        key={idx}
                        className={`${styles.paginationIndicator} ${idx === activeIdx ? styles['active'] : ''}`}
                        onClick={() => setIdx(idx)}
                    ></button>
                ))}
            </div>
            <Button style="xSmall" onClick={handleNext} text=">" />
        </div>
    );
};

const Projects = () => {
    return (
        <div className={styles.projectContainer}>
            <Carousel data={data} />
        </div>
    );
};

export default Projects;

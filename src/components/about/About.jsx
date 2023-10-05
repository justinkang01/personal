import React from 'react';
import styles from './about.module.scss';

/**
 * @returns The About page
 */
const About = () => {
    return (
        <div className={styles.aboutContainer}>
            <div>
                <h1>hi. i'm justin!</h1>
                <h3 className={styles.shortIntro}>Cornell University Graduate | Software Developer</h3>
            </div>
            <div className={styles.introContainer}>
                <p className={styles.restIntro}>
                    Welcome to my website, where I try to implement everything that I learned from different projects,
                    internships, and coursework. Although it's simple, it displays who I am: a coder, a student, a
                    maximalist, and a lover of Christ.
                </p>
                {/* <p className={styles.restIntro}>
                After being introduced to programming as a freshman in college, I then decided to take the plunge into
                software engineering, and now am prepared to be a developer with a focus on frontend technologies. I've
                exposed myself to other areas such as backend engineering and the tiniest bit of data science, but find
                my passion to revolve around creating interactive and accessible websites.
            </p> */}
                <p className={styles.socials}>
                    If any of this interests you, feel free to check out my{' '}
                    <a href="https://www.linkedin.com/in/justin-joonha-kang/" target="_blank" rel="noreferrer noopener">
                        LinkedIn
                    </a>{' '}
                    or my{' '}
                    <a href="https://www.github.com/justinkang01/" target="_blank" rel="noreferrer noopener">
                        GitHub
                    </a>{' '}
                    for more information!
                </p>
                <img alt="the creator of this website: justin" className={styles.img}></img>
            </div>
        </div>
    );
};

export default About;

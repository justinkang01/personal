import React, { useState } from 'react';
import classnames from 'classnames';
import styles from './toggleButton.module.scss';

const classNameBuilder = classnames.bind(styles);

const CheckedIcon = () => <>🌜</>;
const UncheckedIcon = () => <>🌞</>;

const ToggleButton = () => {
    const [toggle, setToggle] = useState(false);

    const onClickHandler = () => {
        setToggle(!toggle);
    };

    const toggleClasses = classNameBuilder(styles.toggle, { toggleChecked: toggle });

    return (
        <div onClick={onClickHandler} className={toggleClasses}>
            <div className={styles.toggleContainer}>
                <div className={styles.toggleCheck}>
                    <span>
                        <CheckedIcon />
                    </span>
                </div>
                <div className={styles.toggleUncheck}>
                    <span>
                        <UncheckedIcon />
                    </span>
                </div>
            </div>
            <div className={styles.toggleCircle}></div>
            <input type="checkbox" aria-label="Toggle Button" className={styles.toggleInput} />
        </div>
    );
};

export default ToggleButton;

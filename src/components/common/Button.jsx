import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './button.module.scss';

const classNameBuilder = classNames.bind(styles);
const Button = ({ text, onClick, style }) => {
    return (
        <div className={classNameBuilder(styles.buttonContainer, styles[style])}>
            <button onClick={onClick} className={styles[style]}>
                {text}
            </button>
        </div>
    );
};
Button.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
};
export default Button;

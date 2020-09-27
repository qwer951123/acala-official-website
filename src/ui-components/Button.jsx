import React from 'react';
import classes from './Button.module.css';
import clsx from 'clsx';
import { ReactComponent as RightArrow } from '../assets/right-arrow.svg';

export const Button = ({ children, className, onClick, suffix, link }) => {
    const renderSuffix = () => {
        if (suffix === 'right-arrow') {
            return <RightArrow />;
        }
    };
    if (link) {
        onClick = () => {
            window.open(link);
        }
    }
    return (
        <button className={clsx(classes.root, className)} onClick={onClick}>
            {children}
            {renderSuffix()}
        </button>
    );
}
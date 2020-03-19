import React from 'react';
import clsx from 'clsx';
import classes from './Container.module.css';

export const Container = ({ children, className }) => {
    return <div className={clsx(classes.container, className)}>{children}</div>
}
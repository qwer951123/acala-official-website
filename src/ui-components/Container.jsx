import React from 'react';
import clsx from 'clsx';
import classes from './Container.module.css';

export const Container = React.forwardRef(({ children, className }, ref) => {
    return <div className={clsx(classes.container, className)} ref={ref}>{children}</div>
});
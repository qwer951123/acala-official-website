import React, { ReactNode } from 'react';
import classes from './index.module.scss';

interface IProps {
    children: ReactNode
}
const Container :React.FC<IProps> = ({ children }) => {
    return (
        <div className={classes.root}>
            {children}
        </div>
    );
};

export default Container;

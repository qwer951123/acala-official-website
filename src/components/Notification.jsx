import React  from 'react';
import classes from './Notification.module.css';
import { Container } from '../ui-components/Container';
import { ReactComponent as CloseIcon } from '../assets/close.svg';

export const Notification = ({ onClose }) => {
    return (
        <div className={classes.root}>
            <Container>
                <p className={classes.p1}>There is NO OFFICIAL PUBLIC SALE of Acala Tokens. BEWARE OF SCAMS & REPORT THEM TO THE <a href='mailto:hello@acala.network' target='_blank' rel="noopener noreferrer">ACALA TEAM</a></p>
            </Container>
            <div onClick={onClose} className={classes.close}><CloseIcon /></div>
        </div>
    );
};

import React from 'react';
import classes from './Button.module.css';
import clsx from 'clsx';

export const Button = ({ children, className, onClick, suffix, link }) => {
    const renderSuffix = () => {
        if (suffix === 'right-arrow') {
            return (
                <svg className={classes.suffix} width="27px" height="22px" viewBox="0 0 27 22" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <g id="ACALA-Copy-4" transform="translate(-536.000000, -2617.000000)" stroke="#FFFFFF">
                            <g id="Group-46" transform="translate(398.000000, 2600.000000)">
                                <g id="Group-47" transform="translate(50.000000, 17.000000)">
                                    <g id="Group-18" transform="translate(101.000000, 11.000000) rotate(-180.000000) translate(-101.000000, -11.000000) translate(88.000000, 0.000000)">
                                        <line x1="25.5" y1="10.5" x2="3.33955086e-13" y2="10.6014769" id="Path-31"></line>
                                        <polyline id="Path-32" strokeLinecap="round" strokeLinejoin="round" points="10.5241823 1.77635684e-15 0 10.6014769 10.5241823 21.3651207"></polyline>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </g>
                </svg>
            );
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
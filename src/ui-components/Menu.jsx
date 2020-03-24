import React from 'react';
import clsx from 'clsx';
import classes from './Menu.module.css';
import arrowDown from '../assets/arrow-down.svg';

export const Menu = ({ title, menu, className, onClick }) => {
    return (
        <div className={clsx(classes.root, className)}>
            <p className={classes.title}>
                {title}
                <img src={arrowDown} className={classes.arrowIcon} alt="arrow-down" />
            </p>
            <ul className={clsx(classes.menu)}>
                {
                    menu && menu.map(({ name, link, anchor }, index) => (
                        <li className={classes.menuItem} key={`${title}-item-${index}`} onClick={onClick}>
                            {
                                anchor && <a href={`#${anchor}`}>{name}</a>
                            }
                            {
                                link && <a href={link} target="_blank" rel="noopener noreferrer">{name}</a>
                            }
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}
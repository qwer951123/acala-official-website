import React, { useRef, useEffect } from 'react';
import clsx from 'clsx';
import classes from './Menu.module.css';
import arrowDown from '../assets/arrow-down.svg';

export const Menu = ({ title, menu, className }) => {
    return (
        <div className={clsx(classes.root, className)}>
            <p className={classes.title}>
                {title}
                <img src={arrowDown} className={classes.arrowIcon}/>
            </p>
            <ul className={clsx(classes.menu)}>
                {
                    menu && menu.map(({ name, link, anchor }, index) => (
                        <li className={classes.menuItem} key={`${title}-item-${index}`}>
                            {
                                anchor && <a href={`#${anchor}`}>{name}</a>
                            }
                            {
                                link && <a href={link} target="_blank">{name}</a>
                            }
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}
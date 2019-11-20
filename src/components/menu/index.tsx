import React, { ReactEventHandler } from 'react';
import { Link } from '@/types';
import classes from './index.module.scss';

interface IProps {
    data: Link[],
    iconMenu?: boolean,
    className?: string,
    itemClassName?: string,
}

const Menu: React.FC<IProps> = ({
    className = '',
    itemClassName = '',
    data,
    iconMenu = false
}) => {
    const attachInnerOnClick = (callback?: ReactEventHandler): ReactEventHandler => (e) => {
        // prevent a tag default action
        e.preventDefault();

        callback && callback(e);
    }
    return (
        <div className={`${classes.root} ${className}`}>
            {
                iconMenu && data.map(({href, name, target, icon, onClick}: Link) => (
                    <a 
                        className={`${classes.icon} ${itemClassName}`}
                        href={href}
                        key={`menu_${name}`}
                        target={target}
                        onClick={onClick && attachInnerOnClick(onClick)}
                    >
                        <img src={icon} alt={name} />
                    </a>
                ))
            }
            {
                !iconMenu && data.map(({href, name, target, onClick}: Link) => (
                    <a 
                        className={`${classes.item} ${itemClassName}`}
                        href={href}
                        key={`menu_${name}`}
                        target={target}
                        onClick={onClick && attachInnerOnClick(onClick)}
                    >
                        {name}
                    </a>
                ))
            }
        </div>
    );
}

export default Menu;

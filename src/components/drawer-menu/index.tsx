import React, { useState } from 'react';
import menuIcon from '@/assets/menu.svg';
import closeIcon from '@/assets/close.svg';
import classes from './index.module.scss';
import { Link } from '@/types';

interface IProps {
    className?: string,
    data: Link[]
}

const DrawerMenu: React.FC<IProps> = ({
    className = '',
    data
}) => {
    const [open, setOpen] = useState<boolean>(false);
    const openDrawer = () => setOpen(true);
    const closeDrawer = () => setOpen(false);
    return (
        <div className={`${className} ${classes.root}`}>
            <button onClick={openDrawer}>
                <img src={menuIcon} alt="menu"/>
            </button>
            <div className={`${open ? classes.open : ''} ${classes.drawer}`}>
                <div className={classes.drawerHeader}>
                    <button onClick={closeDrawer}>
                        <img src={closeIcon} alt="close"/>
                    </button>
                </div>
                <div className={classes.menu}>
                    {
                        data.map((item: Link) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={closeDrawer}
                                className={classes.menuItem}
                            >
                                {item.name}
                            </a>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default DrawerMenu;

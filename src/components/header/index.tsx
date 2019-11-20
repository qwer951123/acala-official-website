import React from 'react';
import Menu from '@/components/menu';
import DrawerMenu from '@/components/drawer-menu';
import classes from './index.module.scss';
import { SiteConfig } from '@/types';
import useConfig from '@/hooks/useConfig';

const Header: React.FC = () => {
    const config: SiteConfig = useConfig();

    return (
        <div className={classes.root}>
            <div className={classes.icon}>
                <img src={config.base.icon} alt="logo"/>
                <span>{config.base.projectName}</span>
            </div>
            <nav className={classes.menu}>
                <Menu data={config.header.menu} />
            </nav>
            <DrawerMenu
                className={classes.drawerMenu}
                data={config.header.menu}
            />
        </div>
    );
};

export default Header;

import React from 'react';
import { SiteConfig } from '@/types';
import Menu from '@/components/menu';
import useConfig from '@/hooks/useConfig';
import classes from './index.module.scss';

const OnLaunch: React.FC = () => {
    const config: SiteConfig = useConfig();

    return (
        <div className={classes.root}>
            <h4 className={classes.title}>{config.onlaunch.title}</h4>
            <Menu data={config.onlaunch.list} iconMenu={true} className={classes.list} itemClassName={classes.listItem}/>
        </div>
    );
}

export default OnLaunch;

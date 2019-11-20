import React from 'react';
import Menu from '@/components/menu';
import classes from './index.module.scss';
import { SiteConfig } from '@/types';
import useConfig from '@/hooks/useConfig';

const Footer: React.FC = () => {
    const config: SiteConfig = useConfig();
    return (
        <div className={classes.root} id="footer">
            <img  className={classes.logo} src={config.base.icon} alt={config.base.projectName} />
            <div className={classes.follow}>
                <p className={classes.followTitle}>{config.footer.follow.title}</p>
                <Menu data={config.footer.follow.list} iconMenu={true} />
            </div>
            <Menu className={classes.menu} data={config.footer.menu} />
        </div>
    );
}

export default Footer;

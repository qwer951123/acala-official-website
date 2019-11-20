import React from 'react';
import { SiteConfig, Logo } from '@/types';
import useConfig from '@/hooks/useConfig';
import classes from './index.module.scss';

const Cover: React.FC = () => {
    const config: SiteConfig = useConfig();

    return (
        <div className={classes.root}>
            <h1 className={classes.title}>
                {config.cover.title}
            </h1>
            <div className={classes.members}>
                <p>{config.cover.members.title}</p>
                <ul className={classes.membersList}>
                    {
                        config.cover.members.list.map((item: Logo) => (
                            <li className={classes.memberItem} key={`members_${item.name}`}>
                                <img src={item.src} alt={item.name} />
                                <span>{item.name}</span>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className={classes.feature}>
                {config.cover.feature.text_1}
                <div className={classes.divider} />
                {config.cover.feature.text_2}
            </div>
        </div>
    );
};

export default Cover;

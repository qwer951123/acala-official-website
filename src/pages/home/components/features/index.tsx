import React from 'react';
import classes from './index.module.scss';
import { SiteConfig, Card } from '@/types';
import useConfig from '@/hooks/useConfig';

const Features: React.FC = () => {
    const config: SiteConfig = useConfig();

    return (
        <div className={classes.root}>
            <div className={classes.list}>
                {
                    config.features.list.map((item: Card) => (
                        <div className={classes.listItem} key={`feature_${item.title}`}>
                            <img className={classes.itemIcon} src={item.icon} alt={item.title} />
                            <p className={classes.itemTitle}>{item.title}</p>
                            <p className={classes.itemContent}>{item.content}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Features;

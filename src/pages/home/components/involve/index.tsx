import React from 'react';
import { SiteConfig, Card } from '@/types';
import useConfig from '@/hooks/useConfig';
import classes from './index.module.scss';

const Involve: React.FC = () => {
    const config: SiteConfig = useConfig();
    return (
        <div className={classes.root}>
            <h4 className={classes.title}>{config.involve.title}</h4>
            <div className={classes.list}>
                {
                    config.involve.list.map((item: Card) => (
                        <div className={classes.listItem} key={`benefits_${item.title}`}>
                            <p className={classes.itemTitle}>{item.title}</p>
                            <p className={classes.itemContent}>{item.content}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Involve;

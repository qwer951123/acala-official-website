import React from 'react';
import { SiteConfig, Card } from '@/types';
import useConfig from '@/hooks/useConfig';
import classes from './index.module.scss';

const Benefits: React.FC = () => {
    const config: SiteConfig = useConfig();
    return (
        <div className={classes.root}>
            <h4 className={classes.title}>{config.benefits.title}</h4>
            <div className={classes.list}>
                {
                    config.benefits.list.map((item: Card) => (
                        <div className={classes.card} key={`benefits_${item.title}`}>
                            <p className={classes.cardTitle}>{item.title}</p>
                            <p className={classes.cardContent}>{item.content}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Benefits;

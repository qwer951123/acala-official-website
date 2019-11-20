import React from 'react';
import { SiteConfig, Card } from '@/types';
import useConfig from '@/hooks/useConfig';
import classes from './index.module.scss';

const RoadMap: React.FC = () => {
    const config: SiteConfig = useConfig();

    return (
        <div className={classes.root} id="roadmap">
            <h4 className={classes.title}>{config.roadmap.title}</h4>
            <div className={classes.list}>
                {
                    config.roadmap.list.map((item: Card) => (
                        <div className={classes.listItem} key={`roadmap_${item.title}`}>
                            <div className={classes.itemTitle}>
                                <div className={classes.itemIcon}>
                                    <img src={item.icon} alt={item.title}/>
                                </div>
                                <p className={classes.itemTitleContent}>
                                    {item.title}
                                </p>
                            </div>
                            <div className={classes.itemContent}>
                                <ul>
                                    {
                                        (item.content as string[]).map((content: string) => (
                                            <li key={content}>{content}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default RoadMap;

import React from 'react';
import classes from './GetInvolved.module.css';
import { Container } from '../ui-components/Container';
import consortium from '../assets/consortium.svg';
import partners from '../assets/partners.svg';
import investores from '../assets/investors.svg';
import { ShowAnimation } from '../ui-components/ShowAnimation';

const ListItem = React.forwardRef(({ icon, title, desc }, ref) => (
    <li className={classes.item} ref={ref}>
        <img src={icon} className={classes.itemIcon} />
        <p className={classes.itemTitle}>{title}</p>
        <p className={classes.itemDesc}>{desc}</p>
    </li>
));

const List = ({ list }) => {
    return (
        <ul className={classes.list}>
            {
                list.map((item, index) => (
                    <ShowAnimation delay={index} key={`get-involved-${index}`}>
                        <ListItem {...item} />
                    </ShowAnimation>
                ))
            }
        </ul>
    );
};

export const GetInvolved = () => {
    const list = [
        {
            icon: consortium,
            title: 'Consortium',
            desc: 'Become a member of the Acala Network, jointly govern and develop an open, transparent and stable financial platform.'
        },
        {
            icon: partners,
            title: 'Partners',
            desc: 'Collaborate and build with Acala members, integrate Acala stablecoin into your products and services.'
        },
        {
            icon: investores,
            title: 'Investors',
            desc: 'Talk to us about investing in Acala Network Laminar and Polkawallet venture portfolio.'
        }
    ];
    return (
        <section className={classes.root}>
            <Container className={classes.container}>
                <p className={classes.title}>Get Involved</p>
                <List list={list} />
            </Container>
        </section>
    );
}
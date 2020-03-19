import React from 'react';
import classes from './Partners.module.css';
import polychain from '../assets/polychain.svg';
import kr1 from '../assets/kr1.svg';
import p2pCaptital from '../assets/p2pCapital.svg';
import hashkey from '../assets/hashkey.svg';
import snz from '../assets/snz.svg';
import stakeZone from '../assets/stakeZone.svg';
import w from '../assets/w.svg';
import goodmore from '../assets/goodmore.svg';
import web3Foundation from '../assets/web3Foundation.svg';
import berkeley from '../assets/berkeley.svg';
import digitalRenaissance from '../assets/digitalRenaissance.svg';
import { Container } from '../ui-components/Container';
import { ShowAnimation } from '../ui-components/ShowAnimation';

const ListItem = React.forwardRef(({ img, link, onClick }, ref) => (
    <li className={classes.item} ref={ref} onClick={() => { onClick(link) }}>
        <img src={img} />
    </li>
));
const List = ({ list }) => {
    list = list.sort(() => 0.5 - Math.random());
    const onClick = link => window.open(link);
    return (
        <ul className={classes.list}>
            {
                list.map((item, index) => (
                    <ShowAnimation delay={index} key={`partners-${index}`}>
                        <ListItem {...item} onClick={onClick} />
                    </ShowAnimation>
                ))
            }
        </ul>
    );
}

export const Partners = () => {
    const list = [
        { img: polychain, link: 'https://polychain.capital' },
        { img: kr1, link: 'https://kr1.io' },
        { img: p2pCaptital, link: 'https://www.p2pcap.com' },
        { img: hashkey, link: 'https://www.hashkey.com' },
        { img: snz, link: 'https://snzholding.com' },
        { img: w, link: 'https://web3.capital' },
        { img: stakeZone, link: 'http://stake.zone' },
        { img: goodmore, link: 'https://goodmore.capital' },
        { img: web3Foundation, link: 'https://web3.foundation' },
        { img: berkeley, link: 'https://www.xcelerator.berkeley.edu' },
        { img: digitalRenaissance, link: 'https://drf.ee' }
    ];

    return (
        <section>
            <Container>
                <div className={classes.title}>Partners</div>
                <List list={list} />
            </Container>
        </section>
    );
}
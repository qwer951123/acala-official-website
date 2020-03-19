import React from 'react';
import classes from './Ecosystem.module.css';
import { Container } from '../ui-components/Container';
import { Button } from '../ui-components/Button';
import ecosystemImg from '../assets/ecosystem.svg';
import chainlink from '../assets/chainlink.svg';
import chainx from '../assets/chainx.svg';
import dipole from '../assets/dipole.svg';
import plasm from '../assets/plasm.svg';
import polkaWord from '../assets/polka-world.svg';
import isubsocial from '../assets/isubsocial.svg';
import anpool from '../assets/anpool.svg';
import { ShowAnimation } from '../ui-components/ShowAnimation';

const Item = React.forwardRef(({ img, link, onClick }, ref) => (
    <li className={classes.ecosystemItem} onClick={() => onClick(link)} ref={ref}>
        <img src={img} />
    </li>
))
const List = ({ list }) => {
    list = list.sort(() => 0.5 - Math.random());
    const onClick = link => window.open(link);
    return (
        <ul className={classes.ecosystemList}>
            {
                list.map((item, index) => (
                    <ShowAnimation delay={index} key={`ecosystem-${index}`}>
                        <Item {...item} onClick={onClick} />
                    </ShowAnimation>
                ))
            }
        </ul>
    );
}
export const Ecosystem = () => {
    const list = [
        { img: chainlink, link: 'https://chain.link' },
        { img: chainx, link: 'https://chainx.org/' },
        { img: dipole, link: 'https://www.dipole.tech' },
        { img: plasm, link: 'https://www.plasmnet.io' },
        { img: polkaWord, link: 'https://xanpool.com' },
        { img: isubsocial, link: 'http://subsocial.network' },
        { img: anpool, link: 'https://xanpool.com' },
    ];
    return (
        <section className={classes.root}>
            <Container>
                <p className={classes.title}>Ecosystem Projects</p>
                <div className={classes.content}>
                    <ShowAnimation>
                        <div className={classes.detail}>
                            <p>This program identifies, engages and supports projects that are using and integrating with Acala’s technologies (aUSD stablecoine, L-DOT staking liquidity, Decentralized Exchange etc). Ecosystem projects will have opportunities for technical and marketing collaborations and beyond.</p>
                            <Button link={'https://forms.gle/iYPUrNzSWGmyvPUp6'}>Apply</Button>
                        </div>
                    </ShowAnimation>
                    <ShowAnimation delay={4}>
                        <img src={ecosystemImg} className={classes.image} />
                    </ShowAnimation>
                </div>
                <List list={list} />
            </Container>
        </section>
    );
}
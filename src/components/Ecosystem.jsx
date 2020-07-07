import React from 'react';
import clsx from 'clsx';

import classes from './Ecosystem.module.css';
import { Container } from '../ui-components/Container';
import { Button } from '../ui-components/Button';
import ecosystemImg from '../assets/ecosystem.svg';
import chainlink from '../assets/chainlink.svg';
import chainx from '../assets/chainx.svg';
import dipole from '../assets/dipole.svg';
import plasm from '../assets/plasm.svg';
import polkaWorld from '../assets/polka-world.svg';
import isubsocial from '../assets/isubsocial.svg';
import anpool from '../assets/anpool.svg';
import phala from '../assets/phala-long.svg';
import purestake from '../assets/purestake.png';
import ont from '../assets/ont.png';
import interlay from '../assets/interlay.png';
import centrifuge from '../assets/centrifuge.svg';
import moonbeam from '../assets/moonbeam.svg';
import onfinality from '../assets/onfinality.svg';
import figment from '../assets/figment.svg';
import ankr from '../assets/ankr.svg';
import chorus from '../assets/chorus.svg';
import snz from '../assets/snz.svg';
import subscan from '../assets/subscan.svg';
import ryabina from '../assets/ryabina.svg';
import p2pValidator from '../assets/p-2-p-validator.svg';

import { ShowAnimation } from '../ui-components/ShowAnimation';

const Item = React.forwardRef(({ name, img, link, style, onClick }, ref) => (
    <li className={classes.ecosystemItem} onClick={() => onClick(link)} ref={ref} >
        <img src={img} alt={name} style={style} />
    </li>
))
const List = ({ className, list }) => {
    list = list.sort(() => 0.5 - Math.random());

    const onClick = link => window.open(link);
    return (
        <ul className={clsx(className, classes.ecosystemList)}>
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
        { name: 'chainlink', img: chainlink, link: 'https://chain.link' },
        { name: 'chainx', img: chainx, link: 'https://chainx.org/' },
        { name: 'dipole', img: dipole, link: 'https://www.dipole.tech', style: { 'max-width': '60%' } },
        { name: 'plasm', img: plasm, link: 'https://www.plasmnet.io' },
        { name: 'polka-world', img: polkaWorld, link: 'https://www.polkaworld.org' },
        { name: 'isubsocial', img: isubsocial, link: 'http://subsocial.network' },
        { name: 'anpool', img: anpool, link: 'https://xanpool.com' },
        { name: 'phala', img: phala, link: 'https://phala.network' },
        { name: 'centrifuge', img: centrifuge, link: 'https://centrifuge.io', },
        { name: 'ont', img: ont, link: 'https://ont.io' },
        { name: 'interlay', img: interlay, link: 'https://www.interlay.io' },
        { name: 'moonbeam', img: moonbeam, link: 'https://moonbeam.network' },
        { name: 'subscan', img: subscan, link: 'https://www.subscan.io' },
    ];
    const proofPartners = [
        { name: 'OnFinality', img: onfinality, link: 'https://www.onfinality.io' },
        { name: 'purestake', img: purestake, link: 'https://www.purestake.com', },
        { name: 'figment-network', img: figment, link: 'https://figment.network' },
        { name: 'ankr', img: ankr, link: 'https://www.ankr.com' },
        { name: 'chorus', img: chorus, link: 'https://chorus.one' },
        { name: 'p2pValidator', img: p2pValidator, link: 'https://p2p.org' },
        { name: 'snz', img: snz, link: 'https://snzholding.com' },
        { nama: 'ryabina', img: ryabina, link: 'https://ryabina.io' }
    ];

    return (
        <section className={classes.root}>
            <Container>
                <p className={classes.title}>Ecosystem Projects</p>
                <div className={classes.content}>
                    <ShowAnimation>
                        <div className={classes.detail}>
                            <p>
                                This program identifies and supports projects that integrate with Acala’s technologies (aUSD stablecoine, L-DOT staking liquidity, Decentralized Exchange etc). Ecosystem projects will have opportunities for technical and marketing collaborations and beyond.
                            </p>
                            <Button c className={classes.appyLink} link={'https://forms.gle/iYPUrNzSWGmyvPUp6'}>Apply</Button>
                        </div>
                    </ShowAnimation>
                    <ShowAnimation delay={4}>
                        <img src={ecosystemImg} className={classes.image} alt="ecosystem" />
                    </ShowAnimation>
                </div>
                <List list={list} />
                <p className={clsx(classes.title, classes.proofPartnersTitle)}>Proof-of-Liveness Partners</p>
                <List list={proofPartners} className={classes.proofPartnesList}/>
            </Container>
        </section>
    );
}
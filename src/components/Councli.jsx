import React from 'react';
import classes from './Councli.module.css';
import { Container } from '../ui-components/Container';
import RuitaoSuPhoto from '../photo/Ruitao_Su.svg';
import FuyaoJiangPhoto from '../photo/Fuyao_Jiang.svg';
import BryanChanPhoto from '../photo/Bryan_Chen.svg';
import { ShowAnimation } from '../ui-components/ShowAnimation';

const MemberItem = React.forwardRef(({ photo, name, introduction }, ref) => (
    <li className={classes.memberItem} ref={ref}>
        <div className={classes.memberCover}>
            <img src={photo} className={classes.memberPhoto} alt={name} />
            <p className={classes.memberName}>{name}</p>
        </div>
        <div className={classes.memberDetail}>
            <div className={classes.memberHeader}>
                <img src={photo} className={classes.memberPhoto} alt={name} />
                <p className={classes.memberName}>{name}</p>
            </div>
            <p className={classes.memberIntroduction}>{introduction}</p>
        </div>
    </li>
));

const Members = ({ members }) => {
    return (
        <ul className={classes.members}>
            {
                members.map((item, index) => (
                    <ShowAnimation delay={index + 1} key={`councli-${item.name}`}>
                        <MemberItem {...item} />
                    </ShowAnimation>
                ))
            }
        </ul>
    );
};
export const Councli = () => {
    const members = [
        {
            photo: RuitaoSuPhoto,
            name: 'Ruitao Su',
            introduction: 'Ruitao Su is co-founder of Acala. He is also co-founder and CEO of Laminar, a leading synthetic asset and margin trading platform. Ruitao has led the design and development of leading token economic models including the decentralized Sovereign Wealth Fund (dSWF). He has also led multiple successful token generation events and founded several technology startups.'
        },
        {
            photo: FuyaoJiangPhoto,
            name: 'Fuyao Jiang',
            introduction: 'Fuyao Jiang is co-founder of Acala and founder of Polkawallet, Polkadot’s mobile wallet. He was instrumental in building the Polkadot community and outreach. Fuyao has run many successful community campaigns and presented to numerous audiences around China.',
        },
        {
            photo: BryanChanPhoto,
            name: 'Bryan Chen',
            introduction: 'Bryan Chen is co-founder of Acala. He is also co-founder and CTO of Laminar. As a core contributor to the Substrate codebase, Bryan is an active Polkadot Ambassador. He is also the lecturer of the first Substrate/Polkadot online course endorsed by Dr Gavin Wood.'
        }
    ]
    return (
        <section className={classes.root}>
            <Container className={classes.container}>
                <p className={classes.title}>
                    <span>Foundation</span>
                    <br/>
                    <span>Council Members</span>
                </p>
                <Members members={members} />
            </Container>
        </section>
    );
}

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
            <img src={photo} className={classes.memberPhoto} />
            <p className={classes.memberName}>{name}</p>
        </div>
        <div className={classes.memberDetail}>
            <div className={classes.memberHeader}>
                <img src={photo} className={classes.memberPhoto} />
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
                    <ShowAnimation delay={index + 1} key={`councli-${index}`}>
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
            introduction: 'Ruitao Su is the co-founder of Acala. He is also co-founder and CEO of Laminar - a leading synthetic asset and margin trading platform. Ruitao has led design & development of state-of-art token economic models including the decentralized Soverign Wealth Fund (dSWF), led multiple successful token generation events, as well as founded several technology startups.'
        },
        {
            photo: FuyaoJiangPhoto,
            name: 'Fuyao Jiang',
            introduction: 'Fuyao Jiang is the co-founder of Acala. He is also the founder of Polkawallet - the de facto mobile wallet in Polkadot ecosystem. He was one of Polkadot’s ealiest community builder, opinion leader and evangelist. He has run successfull community campaigns, and presented to various audiences around China.',
        },
        {
            photo: BryanChanPhoto,
            name: 'Bryan Chen',
            introduction: 'Bryan Chen is the co-founder of Acala. He is also co-founder and CTO of Laminar. Bryan is a core contributor to the Substrate codebase, an active Polkadot Ambassador, and the lecturer of the first Substrate/Polkadot online course endorsed by Dr Gavin Wood.'
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

import React, { useRef } from 'react';
import classes from './Team.module.css';
import clsx from 'clsx';
import BetteChenPhoto from '../photo/Bette_Chen.svg';
import AntoniaChenPhoto from '../photo/Antonia_Chen.svg';
import ErmalKaleciPhoto from '../photo/Ermal_Kaleci.svg';
import YuZhuLiuPhoto from '../photo/Yuzhu_Liu.svg';
import JianJiangWangPhoto from '../photo/Jianjiang_Wang.svg';
import HaoQiuPhoto from '../photo/Hao_Qiu.svg';
import JackPlatts from '../photo/Jack_Platts.svg';
import LaminarLogo from '../assets/laminar-logo-team.svg';
import PolkaWalletLogo from '../assets/polkawallet-logo-team.svg';
import Web3FoundationLogo from '../assets/web3-foundation-logo-team.svg';
import ControllRightArrow from '../assets/control-right-arrow.svg';
import { Container } from '../ui-components/Container';
import { ShowAnimation } from '../ui-components/ShowAnimation';

const MemberItem = React.forwardRef(({ photo, name, title, icon, company }, ref) => (
    <li className={classes.memberItem} ref={ref}>
        <img src={photo} className={classes.memberPhoto} alt={name} />
        <p className={classes.memberName}>{name}</p>
        <p className={classes.memberTitle}>{title}</p>
        <img src={icon} className={clsx(classes.memberCompany, classes[company])} alt={company} />
    </li>
));
const Member = React.forwardRef(({ members }, ref) => {
    return (
        <div className={classes.members}>
            <ul className={classes.content} ref={ref}>
                {
                    members.map((item, index) => {
                        if (index < 5) {
                            return (
                                <ShowAnimation delay={index + 1} key={`team-members-${index}`}>
                                    <MemberItem {...item} />
                                </ShowAnimation>

                            );
                        }
                        return <MemberItem {...item} />;
                    })
                }
            </ul>
        </div>
    );
});

const Controll = ({ onNext, onPrev }) => {
    return (
        <div className={classes.control}>
            <button className={clsx(classes.controlBtn, classes.prevBtn)} onClick={onPrev}>
                <img src={ControllRightArrow} alt="arrow-right" />
            </button>
            <button className={clsx(classes.controlBtn, classes.nextBtn)} onClick={onNext}>
                <img src={ControllRightArrow} alt="arrow-right" />
            </button>
        </div>
    );
}
export const Team = () => {
    const members = useRef([
        {
            photo: BetteChenPhoto,
            name: 'Bette Chen',
            title: 'Chief Operating Officer',
            company: 'laminar',
            icon: LaminarLogo
        },
        {
            photo: AntoniaChenPhoto,
            name: 'Antonia Chen',
            title: 'Chief Economist',
            company: 'laminar',
            icon: LaminarLogo
        },
        {
            photo: ErmalKaleciPhoto,
            name: 'Ermal Kaleci',
            title: 'Senior Software Engineer',
            company: 'laminar',
            icon: LaminarLogo
        },
        {
            photo: YuZhuLiuPhoto,
            name: 'Yuzhu Liu',
            title: 'Head of Collaborations',
            company: 'polkawallet',
            icon: PolkaWalletLogo
        },
        {
            photo: JianJiangWangPhoto,
            name: 'Jianjiang Wang',
            title: 'Chief Technology Officer',
            company: 'polkawallet',
            icon: PolkaWalletLogo
        },
        {
            photo: HaoQiuPhoto,
            name: 'Hao Qiu',
            title: 'Full-stack Engineer',
            company: 'polkawallet',
            icon: PolkaWalletLogo
        },
        {
            photo: JackPlatts,
            name: 'Jack Platts',
            title: 'Advisor',
            company: 'web3-foundation',
            icon: Web3FoundationLogo
        }
    ].sort(() => 0.5 - Math.random()));
    const ref = useRef();
    const count = useRef(0);
    const onNext = () => {
        const $list = ref.current;
        if (!$list) return false;
        const $item = $list.querySelector('li');
        const itemWidht = $item.clientWidth;
        const itemMargin = parseInt(window.getComputedStyle($item)['margin-right']);
        const maxCount = Math.ceil($list.clientWidth / ((itemWidht + itemMargin) * 3)) - 1;
        if (count.current < maxCount) {
            count.current = count.current + 1;
            ref.current.style.transform = `translate3d(-${(itemWidht + itemMargin) * 3 * count.current}px, 0, 0)`;
        }
    };

    const onPrev = () => {
        const $list = ref.current;
        if (!$list) return false;
        const $item = $list.querySelector('li');
        const itemWidht = $item.clientWidth;
        const itemMargin = parseInt(window.getComputedStyle($item)['margin-right']);
        if (count.current > 0) {
            count.current = count.current - 1;
            ref.current.style.transform = `translate3d(-${(itemWidht + itemMargin) * 3 * count.current}px, 0, 0)`;
        }
    };

    return (
        <section className={classes.root}>
            <Container>
                <div className={classes.title}>Contributors</div>
                <Member members={members.current} ref={ref} />
                <Controll onNext={onNext} onPrev={onPrev} />
            </Container>
        </section>
    );
}
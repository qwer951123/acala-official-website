import React, { createRef, useRef } from 'react';
import clsx from 'clsx';
import classes from './Roadmap.module.css';
import { Container } from '../ui-components/Container';
import { Button } from '../ui-components/Button';
import { RightArrowIcon } from '../ui-components/RightArrowIcon';

const Timeline = ({ timeline }) => {
    const $listRef = createRef();
    const page = useRef(0);
    const onNext = () => {
        const $list = $listRef.current;
        const $item = $list.querySelector('li');
        if (!$list || !$item) {
            return false;
        }
        const listWidth = $list.clientWidth;
        const itemWidth = $item.clientWidth;
        const marginRight = parseInt(window.getComputedStyle($item)['margin-right']);
        const maxPage = Math.ceil(listWidth / ((marginRight + itemWidth) * 3)) - 1;
        if (page.current < maxPage) {
            page.current = page.current + 1;
            $list.style.transform = `translate3d(-${(itemWidth + marginRight) * 3 * page.current}px, 0, 0)`
        }
    };
    const onPrev = () => {
        const $list = $listRef.current;
        const $item = $list.querySelector('li');
        if (!$list || !$item) {
            return false;
        }
        const itemWidth = $item.clientWidth;
        const marginRight = parseInt(window.getComputedStyle($item)['margin-right']);
        if (page.current > 0) {
            page.current = page.current - 1;
            $list.style.transform = `translate3d(-${(itemWidth + marginRight) * 3 * page.current}px, 0, 0)`
        }
    };

    return (
        <div className={classes.timelineContainer}>
            <div className={classes.controll}>
                <Button className={classes.prevBtn} onClick={onPrev}><RightArrowIcon /></Button>
                <Button className={classes.nextBtn} onClick={onNext}><RightArrowIcon /></Button>
            </div>
            <ul className={classes.timeline} ref={$listRef}>
                {
                    timeline.map(({ year, quarter, item, type }, index) => (
                        <li className={clsx(classes.timelineItem, classes[type])} key={`timeline-${index}`}>
                            <div className={clsx(classes.precent, classes[type])} />
                            <p>
                                <span className={classes.timelineYear}>{year}</span>
                                <span className={classes.timelineQuarter}>.{quarter}</span>
                            </p>
                            <ul className={classes.timelineDetail}>
                                {
                                    item.map(({ text, complated }, index) => (
                                        <li className={clsx({ [classes.complated]: complated })} key={`timeline-detail-${index}`}>
                                            <p>{text}</p>
                                        </li>
                                    ))
                                }
                            </ul>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export const Roadmap = () => {
    const timeline = [
        {
            type: 'past',
            year: '2019',
            quarter: 'Q3',
            item: [
                { text: 'Signing Initial Members', complated: true },
                { text: 'Development kick-off', complated: true }
            ]
        },
        {
            type: 'past',
            year: '2019',
            quarter: 'Q4',
            item: [
                { text: 'Whitepaper & Economic model', complated: true },
                { text: 'Testnet Candidate 1', complated: true }
            ]
        },
        {
            type: 'current',
            year: '2020',
            quarter: 'Q1',
            item: [
                { text: 'Testnet Candidate 2', complated: true },
                { text: 'Economic Model dSWF', complated: true },
                { text: 'Security Audit begin', complated: false }
            ]
        },
        {
            type: 'feature',
            year: '2020',
            quarter: 'Q2',
            item: [
                { text: 'Canary Network Launch', complated: false },
                { text: 'Parachain on Kusama', complated: false },
                { text: 'Security Audit', complated: false }
            ]
        },
        {
            type: 'feature',
            year: '2020',
            quarter: 'Q3',
            item: [
                { text: 'Mainnet Alpha', complated: false },
                { text: 'Parachain Auction on Polkadot', complated: false },
                { text: 'Stablecoin Enabled', complated: false }
            ]
        },
        {
            type: 'feature',
            year: '2020',
            quarter: 'Q4',
            item: [
                { text: 'Staking Liquidity Enabled', complated: false },
                { text: 'Cross-chain Capability', complated: false },
                { text: 'Cross-chain Assets', complated: false }
            ]
        }
    ]
    return (
        <section className={classes.root}>
            <Container>
                <p className={classes.title}>Roadmap</p>
                <Timeline timeline={timeline} />
            </Container>
        </section>
    );
}
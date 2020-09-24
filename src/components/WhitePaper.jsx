import React from 'react';
import classes from './WhitePaper.module.css';
import { Container } from '../ui-components/Container';
import { Button } from '../ui-components/Button';
import { RightArrowIcon } from '../ui-components/RightArrowIcon';
import acalaLogo from '../assets/acala-logo.svg';
import economyIcon from '../assets/economy-icon.svg';
import whitePaperIcon from '../assets/whitepaper-icon.svg';
import decentralizedIcon from '../assets/decentralized-icon.svg';
import { ShowAnimation } from '../ui-components/ShowAnimation';

const DocumentList = React.forwardRef(({ list }, ref) => {
    return (
        <ul className={classes.documentList} ref={ref}>
            {
                list.map(({ icon, title, detail, link }, index) => (
                    <div key={`document-${index}`}>
                        <li className={classes.documentItem}>
                            <img src={icon} className={classes.documentIcon} alt={title} />
                            <p className={classes.documentTitle}>{title}</p>
                            <p className={classes.documentDetail}>{detail}</p>
                            <Button className={classes.documentLink} link={link}>
                                <RightArrowIcon />
                            </Button>
                        </li>
                        { index !== list.length - 1 && <div className={classes.divider} /> }
                    </div>
                ))
            }
        </ul>
    );
});

export const WhitePaper = () => {
    const documentList = [
        {
            icon: economyIcon,
            title: 'Token Economy',
            detail: 'This paper outlines key utilities of the ACA tokens, its distribution model to support continuous R&D and gradual decentralization, and explores economic models to participate in parachain auctions over multiple periods under varied circumstances.',
            link: 'https://github.com/AcalaNetwork/Acala-white-paper/blob/master/Acala_Token_Economy_Paper.pdf'
        },
        {
            icon: whitePaperIcon,
            title: 'Acala Whitepaper',
            detail: 'This paper introduces and elaborates on two decentralized protocols that enable cross-chain financial stability and liquidity on the Polkadot network - the Honzon Stablecoin Protocol and the Homa Tokenized Staking Liquidity Protocol.',
            link: 'https://github.com/AcalaNetwork/Acala-white-paper/blob/master/Acala_Whitepaper.pdf',
        },
        {
            icon: decentralizedIcon,
            title: 'Decentralized Sovereign Wealth Fund (dSWF)',
            detail: 'This paper proposes a self-sustaining economic model for the era of connected digital jurisdictions - a dSWF to hold foreign cryptocurrency reserve with value, yield & utility, to secure a parachain on for itself & others, R&D for generations to come, all on behalf of & governed by token holders.',
            link: 'https://github.com/AcalaNetwork/Acala-white-paper/blob/master/Building_a_Decentralized_Sovereign_Wealth_Fund.pdf'
        }
    ]
    return (
        <section className={classes.root}>
            <Container className={classes.container}>
                <div className={classes.background}/>
                <ShowAnimation>
                    <div className={classes.summary}>
                        <img className={classes.icon} src={acalaLogo} alt="logo" />
                        <p className={classes.title}>Acala’s Whitepaper</p>
                        <p className={classes.detail}>
                            Acala Foundation’s research focuses on decentralized finance protocol and mechanism design, parachain economic modelling and governance.
                        </p>
                    </div>
                </ShowAnimation>
                <ShowAnimation delay={2}>
                    <DocumentList list={documentList}/>
                </ShowAnimation>
            </Container>
        </section>
    );
}
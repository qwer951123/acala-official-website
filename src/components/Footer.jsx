import React from 'react';
import twitterIcon from '../assets/twitter.svg';
import mediumIcon from '../assets/medium.svg';
import facebookIcon from '../assets/facebook.svg'
import linkinIcon from '../assets/linkedin.svg';
import wechatIcon from '../assets/wechat.svg';
import { Container } from '../ui-components/Container';
import classes from './Footer.module.css';

const SocialMedia = ({ list }) => {
    return (
        <ul className={classes.socialMedia}>
            {
                list.map(({ link, icon }, index) => (
                    <li className={classes.socialMediaItem} key={`social-media-${index}`}>
                        <a href={link}>
                            <img src={icon}/>
                        </a>
                    </li>
                ))
            }
        </ul>
    );
}

const Links = ({ links }) => {
    return (
        <ul className={classes.links}>
            {
                links.map(({ title, data}, index) => (
                    <li className={classes.linkItem} key={`links-collection-${index}`}>
                        <p className={classes.linkItemTitel}>{title}</p>
                        <ul className={classes.linkItemData}>
                            {
                                data.map(({ name, link}, index) => (
                                    <li className={classes.linkDataItem} key={`links-${index}`}>
                                        <a href={link} className={classes.linkDataItemLink}>{name}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    </li>
                ))
            }
        </ul>
    );
}
export const Footer = () => {
    const socialMedia = [
        { link: 'https://twitter.com/AcalaNetwork', icon: twitterIcon },
        { link: 'https://medium.com/acalanetwork', icon: mediumIcon },
        // { link: '', icon: facebookIcon },
        { link: 'https://www.linkedin.com/company/acalanetwork/', icon: linkinIcon },
        { link: '', icon: wechatIcon },
    ];
    const links = [
        {
            title: 'Resources',
            data: [
                { name: 'Whitepaper', link: 'https://github.com/AcalaNetwork/Acala-white-paper' },
                { name: 'Documentation', link: 'https://github.com/AcalaNetwork/Acala/wiki' },
                // { name: 'Brand Assets', link: '' },
            ]
        },
        {
            title: 'Products',
            data: [
                { name: 'Honzon DApp', link: 'https://apps.acala.network' },
                { name: 'Console', link: 'https://console.acala.network/#/chainstate' },
                { name: 'Telemetry', link: 'https://telemetry.polkadot.io/' },
            ]
        },
        {
            title: 'Foundation',
            data: [
                { name: 'About', link: '' },
                { name: 'Contact', link: 'mailto:hello@acala.network' },
            ]
        },
    ]
    return (
        <footer className={classes.root}>
            <Container className={classes.container}>
                <div className={classes.contactWay}>
                    <p className={classes.foundation}>Acala  Foundation</p>
                    <SocialMedia list={socialMedia} />
                </div>
                <Links links={links} />
            </Container>
        </footer>
    );
}
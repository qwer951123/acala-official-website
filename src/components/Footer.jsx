import React from 'react';
import clsx from 'clsx';
import twitterIcon from '../assets/twitter.svg';
import mediumIcon from '../assets/medium.svg';
// import facebookIcon from '../assets/facebook.svg'
import discourseIcon from '../assets/discourse.svg';
import linkinIcon from '../assets/linkedin.svg';
import wechatIcon from '../assets/wechat.svg';
import wechatQRCode from '../assets/wechat-qrcode.jpg';
import githubIcon from '../assets/github.svg';
import discordIcon from '../assets/discord.svg';
import telegramIcon from '../assets/telegram.svg';
import { Container } from '../ui-components/Container';
import classes from './Footer.module.css';

const SocialItem = ({ link, icon, img }) => {
    if (link) {
        return (
            <a href={link} target="_blank" rel="noopener noreferrer">
                <img src={icon} alt={link} className={classes.socialMediaIcon}/>
            </a>
        );
    }
    if (img) {
        return (
            <div>
                <img src={icon} alt={link} className={classes.socialMediaIcon}/>
                <img src={img} alt={''} className={clsx(classes.socialMediaItemImg)} />
            </div>
        );
    }
    return null;
};

const SocialMedia = ({ list }) => {
    return (
        <ul className={classes.socialMedia}>
            {
                list.map((item, index) => (
                    <li className={classes.socialMediaItem} key={`social-media-${index}`}>
                        <SocialItem {...item} />
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
                                data.map(({ name, link, tag }, index) => (
                                    <li className={classes.linkDataItem} key={`links-${index}`}>
                                        <a href={link} className={classes.linkDataItemLink} target='_blank' rel="noopener noreferrer">
                                            {name}
                                            {
                                                tag ? <span className={classes.tag}>{tag}</span> : null
                                            }
                                        </a>
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
        { link: 'https://github.com/AcalaNetwork', icon: githubIcon },
        { link: 'https://www.linkedin.com/company/acalanetwork', icon: linkinIcon },
        { link: 'https://acala.discourse.group', icon: discourseIcon },
        { link: 'https://discord.gg/6QHVY4X', icon: discordIcon },
        { link: 'https://t.me/acalaofficial', icon: telegramIcon },
        { link: '', icon: wechatIcon, img: wechatQRCode },
    ];
    const links = [
        {
            title: 'Resources',
            data: [
                { name: 'Whitepaper', link: 'https://github.com/AcalaNetwork/Acala-white-paper' },
                { name: 'Documentation', link: 'https://github.com/AcalaNetwork/Acala/wiki' },
                // { name: 'Brand Assets', link: '' },
                { name: 'Career', link: './jobs.html', tag: 'HIRING' }
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
                    <p className={classes.foundation}>Acala Foundation</p>
                    <Links links={links} />
                </div>
                <div>
                    <p className={classes.newsletter}>Newsletter</p>
                    <div id='form' className={classes.form} />
                    <SocialMedia list={socialMedia} />
                </div>
            </Container>
        </footer>
    );
}
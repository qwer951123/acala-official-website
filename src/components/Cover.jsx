import React, { useState } from "react";
import classes from "./Cover.module.css";
import { Container } from "../ui-components/Container";

import acalaIcon from "../assets/acala.svg";
import karuraIcon from "../assets/karura.svg";
import mandalaIcon from "../assets/mandala.svg";
import polkaWalletIcon from "../assets/polkadot-wallet.svg";
import laminarIcon from "../assets/laminar.svg";
import polkaWalletColorIcon from "../assets/polkadot-wallet-color.svg";
import laminarColorIcon from "../assets/laminar-color.svg";
import coverBackground from "../assets/cover-background.gif";

const MemberItem = ({ name, icon, hoverIcon, link }) => {
    const [hover, setHover] = useState(false);
    const onClick = () => window.open(link);
    const onMouseOut = () => setHover(false);
    const onMouseOver = () => setHover(true);
    return (
        <li className={classes.memberItem} key={`member-${name}`} onClick={onClick} onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
            <img className={classes.memberItemImg} src={hover ? hoverIcon : icon} />
            <p className={classes.memberItemTitle}>{name}</p>
        </li>
    );
}
const Member = ({ members }) => {
    return (
        <ul className={classes.memberList}>
            {members.map((item) => (
                <MemberItem {...item} />
            ))}
        </ul>
    );
};

const Assets = ({ assets }) => {
    return (
        <ul className={classes.assetsList}>
            {assets.map(({ name, icon }) => (
                <li className={classes.assetItem} key={`asset-${name}`}>
                    <img className={classes.assetItemImg} src={icon} />
                    <p className={classes.assetItemTitle}>{name}</p>
                </li>
            ))}
        </ul>
    );
};

export const Cover = () => {
    const members = [
        { name: "Polkwallet", icon: polkaWalletIcon, hoverIcon: polkaWalletColorIcon, link: 'https://www.laminar.one' },
        { name: "Laminar", icon: laminarIcon, hoverIcon: laminarColorIcon, link: 'https://polkawallet.io' }
    ];
    const assets = [
        { name: "Acala", icon: acalaIcon },
        { name: "Karura", icon: karuraIcon },
        { name: "Mandala", icon: mandalaIcon }
    ];
    return (
        <section className={classes.root}>
            <Container>
                <img src={coverBackground} className={classes.background} />
                <h1 className={classes.title}>
                    A decentralized stablecoin platform powering cross-blockchain open
                    finance applications
                </h1>
                <div className={classes.member}>
                    <div>Founding Members</div>
                    <Member members={members} />
                </div>
                <Assets assets={assets} />
            </Container>
        </section>
    );
};

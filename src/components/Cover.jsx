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
import coverBackground from "../assets/cover-bg.mp4";

const MemberItem = ({ name, icon, hoverIcon, link }) => {
    const [hover, setHover] = useState(false);
    const onClick = () => window.open(link);
    const onMouseOut = () => setHover(false);
    const onMouseOver = () => setHover(true);
    return (
        <li className={classes.memberItem} onClick={onClick} onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
            <img className={classes.memberItemImg} src={hover ? hoverIcon : icon} alt={name} />
            <p className={classes.memberItemTitle}>{name}</p>
        </li>
    );
}
const Member = ({ members }) => {
    return (
        <ul className={classes.memberList}>
            {members.map((item) => (
                <MemberItem {...item} key={`member-${item.name}`} />
            ))}
        </ul>
    );
};

const Assets = ({ assets }) => {
    return (
        <ul className={classes.assetsList}>
            {assets.map(({ name, icon }) => (
                <li className={classes.assetItem} key={`asset-${name}`}>
                    <img className={classes.assetItemImg} src={icon} alt={name} />
                    <p className={classes.assetItemTitle}>{name}</p>
                </li>
            ))}
        </ul>
    );
};

export const Cover = () => {
    const members = [
        { name: "Polkawallet", icon: polkaWalletIcon, hoverIcon: polkaWalletColorIcon, link: 'https://polkawallet.io' },
        { name: "Laminar", icon: laminarIcon, hoverIcon: laminarColorIcon, link: 'https://laminar.one' }
    ];

    const assets = [
        { name: "Acala", icon: acalaIcon },
        { name: "Karura", icon: karuraIcon },
        { name: "Mandala", icon: mandalaIcon }
    ];
    return (
        <section className={classes.root}>
            <Container>
                <video src={coverBackground} className={classes.background} autoPlay loop="loop" />
                <h1 className={classes.title}>
                    A decentralized finance hub and stablecoin platform powering cross blockchain liquidity and applications
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

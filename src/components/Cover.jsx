import React from "react";
import classes from "./Cover.module.css";
import { Container } from "../ui-components/Container";

import acalaIcon from "../assets/acala.svg";
import karuraIcon from "../assets/karura.svg";
import mandalaIcon from "../assets/mandala.svg";
import polkadotWalletIcon from "../assets/polkadot-wallet.svg";
import laminarIcon from "../assets/laminar.svg";
import coverBackground from "../assets/cover-background.gif";

const Member = ({ members }) => {
    return (
        <ul className={classes.memberList}>
            {members.map(({ name, icon }) => (
                <li className={classes.memberItem} key={`member-${name}`}>
                    <img className={classes.memberItemImg} src={icon} />
                    <p className={classes.memberItemTitle}>{name}</p>
                </li>
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
        { name: "Polkwallet", icon: polkadotWalletIcon },
        { name: "Laminar", icon: laminarIcon }
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

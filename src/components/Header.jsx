import React, { useState, useCallback } from 'react';
import clsx from 'clsx';
import classes from './Header.module.css';
import { Container } from '../ui-components/Container';
import logo from '../assets/logo-with-name.svg';
import { Menu } from '../ui-components/Menu';
import { useModal } from '../hooks/useModal';
import menuIcon from '../assets/menu.svg';
import closeIcon from '../assets/close.svg';
import { Notification } from '../components/Notification';

const resourceMenu = [
    {
        name: 'Whitepaper',
        link: 'https://github.com/AcalaNetwork/Acala-white-paper'
    },
    {
        name: 'Documentation',
        link: 'https://github.com/AcalaNetwork/Acala/wiki'
    }
];
const productMenu = [
    {
        name: 'What is Acala',
        anchor: 'what-is-acala'
    },
    {
        name: 'Acala Apps',
        anchor: 'acala-apps'
    },
    {
        name: 'Roadmap',
        anchor: 'roadmap'
    },
];
const foundationMenu = [
    {
        name: 'Council member',
        anchor: 'council'
    },
    {
        name: 'Contributors',
        anchor: 'team'
    },
    {
        name: 'Partners',
        anchor: 'partners'
    },
    {
        name: 'Ecosystem Projects',
        anchor: 'ecosystem'
    },
    {
        name: 'Contact',
        anchor: 'contact'
    }
];
export const Header = () => {
    const { status, toggle } = useModal();
    const [open, setOpen] = useState(true);
    const close = useCallback(() => setOpen(false), [setOpen]);

    return (
        <header className={clsx(classes.header, {[classes.open]: open })}>
            { open ? <Notification onClose={close} /> : null }
            <Container className={classes.container}>
                <img src={logo} className={classes.logo} alt="logo" />
                <div className={classes.menu}>
                    <Menu title={'Resource'} className={classes.menuItem} menu={resourceMenu} />
                    <Menu title={'Products'} className={classes.menuItem} menu={productMenu} />
                    <Menu title={'Foundation'} className={classes.menuItem} menu={foundationMenu} />
                </div>
                <div className={classes.mobileMenu} onClick={toggle}>
                    <img src={status ? closeIcon : menuIcon } alt="menu" />
                </div>
                <div className={clsx(classes.mobileMenuContainer, {[classes.show]: status })}>
                    <div className={classes.mobileMenu} onClick={toggle}>
                        <img src={status ? closeIcon : menuIcon } alt="menu" />
                    </div>
                    <Menu title={'Resource'} className={classes.menuItem} menu={resourceMenu} onClick={toggle} />
                    <Menu title={'Products'} className={classes.menuItem} menu={productMenu} onClick={toggle} />
                    <Menu title={'Foundation'} className={classes.menuItem} menu={foundationMenu} onClick={toggle} />
                </div>
            </Container>
        </header>
    );
};
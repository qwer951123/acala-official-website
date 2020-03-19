import React from 'react';
import classes from './Header.module.css';
import { Container } from '../ui-components/Container';
import logo from '../assets/logo-with-name.svg';
import { Menu } from '../ui-components/Menu';

export const Header = () => {
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
            name: 'Team member',
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
    ]
    return (
        <header className={classes.header}>
            <Container className={classes.container}>
                <img src={logo} className={classes.logo} />
                <div className={classes.menu}>
                    <Menu title={'Resource'} className={classes.menuItem} menu={resourceMenu} />
                    <Menu title={'Products'} className={classes.menuItem} menu={productMenu} />
                    <Menu title={'Foundation'} className={classes.menuItem} menu={foundationMenu} />
                </div>
            </Container>
        </header>
    );
};
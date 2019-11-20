import { OptionalKeys } from "prop-types";

export interface Link {
    icon?: string,
    name: string,
    href?: string,
    target?: string,
    onClick?: () => void,
}

export interface Logo {
    name?: string,
    src: string,
}

export interface Card {
    icon?: string,
    title: string,
    content: string | string[],
}

export interface SiteConfig {
    base: {
        icon: string,
        projectName: string,
    },
    header: {
        menu: Link[]
    },
    cover: {
        title: string[],
        members: {
            title: string,
            list: Logo[]
        },
        feature: {
            text_1: string,
            text_2: string,
        },
    },
    features: {
        list: Card[]
    },
    benefits: {
        title: string,
        list: Card[]
    },
    roadmap: {
        title: string,
        list: Card[],
    },
    onlaunch: {
        title: string,
        list: Link[],
    },
    involve: {
        title: string,
        list: Card[],
    },
    footer: {
        follow: {
            title: string,
            list: Link[],
        },
        menu: Link[],
    },
}

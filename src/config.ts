import { SiteConfig } from "@/types";
import featureStableCurrency from '@/assets/feature_stable_currency.svg';
import featureMultiCollateral from '@/assets/feature_multi_collateral.svg';
import featureInfluence from '@/assets/feature_influence.svg';
import hashTag from '@/assets/hash_tag.svg';
import laminar from '@/assets/laminar.svg';
import polkadot from '@/assets/polkadot.png';
import polkawallet from '@/assets/polkawallet.png';
import substrate from '@/assets/substrate.png';
import chainx from '@/assets/chainx.png';
import medium from '@/assets/medium.svg';
import twitter from '@/assets/twitter.svg';
import logo from '@/assets/logo.svg';

const config: SiteConfig = {
    base: {
        icon: logo,
        projectName: 'Acala',
    },
    header: {
        menu: [
            // {
            //     name: 'Products',
            //     href: '',
            //     target: '_blank',
            // },
            // {
            //     name: 'Resources',
            //     href: '',
            //     target: '_blank',
            // },
            {
                name: 'Roadmap',
                href: '#roadmap',
            },
            {
                name: 'Contact',
                href: '#footer',
            }
        ]
    },
    cover: {
        title: [
            `A decentralized stablecoin platform
            powering cross-blockchain
            open finance applications`
        ],
        members: {
            title: 'Founding Members',
            list: [
                {
                    name: 'Laminar',
                    src: laminar,
                },
                {
                    name: 'Polkwallet',
                    src: polkawallet,
                }
            ]
        },
        feature: {
            text_1: '1 Acala Dollar = 1 US Dollar',
            text_2: 'Ticker: aUSD'
        }
    },
    features: {
        list: [
            {
                icon: featureStableCurrency,
                title: 'Stable Currency',
                content: 'Asset-backed decentralized currency without volatility. Stable by design and without borders.'
            },
            {
                icon: featureMultiCollateral,
                title: 'Multi-Collateral Backed',
                content: 'Every aUSD is backed in excess  by multiple asset collaterals. Safety mechanisms and incentives are in place to counter volatility, ensure security and resilience.'
            },
            {
                icon: featureInfluence,
                title: 'Influence by Ownership',
                content: 'Acala Network Token holders have the responsibility to govern the network’s operation, make decision on its future, and share earnings.'
            }
        ]
    },
    benefits: {
        title: 'A crosschain stablecoin system will:',
        list: [
            {
                title: '01',
                content: 'Create a sound, stable currency for low cost,  borderless value transfer for all chains in the network.'
            },
            {
                title: '02',
                content: 'Enable business lending with predictable risk'
            },
            {
                title: '03',
                content: 'Serve as a building block for more open finance services'
            }
        ]
    },
    roadmap: {
        title: 'Roadmap',
        list: [
            {
                icon: hashTag,
                title: '2020.02',
                content: [
                    '• Testnet launch',
                    '• Security Audits',
                    '• Crowdfunded Initial Parachain Offering'
                ]
            },
            {
                icon: hashTag,
                title: '2020.04',
                content: [
                    '• Cross-chain asset transfer',
                    '• Mainnet Alpha preparation'
                ]
            }
        ]
    },
    onlaunch: {
        title: 'On Launch',
        list: [
            { name: 'laminar', icon: laminar, href: 'https://laminar.one/', target: '_blank' },
            { name: 'polkadot', icon: polkadot, href: 'https://polkadot.network/', target: '_blank' },
            { name: 'polkawallet', icon: polkawallet, href: 'https://polkawallet.io/', target: '_blank' },
            { name: 'substrate', icon: substrate, href: 'https://www.parity.io/substrate/', target: '_blank' },
            { name: 'chainx', icon: chainx, href: 'https://chainx.org/', target: '_blank' }
        ]
    },
    involve: {
        title: 'Get involved with Acala',
        list: [
            {
                title: 'Consortium',
                content: 'Become a member of the Acala Network, jointly govern and develop an open, transparent and stable financial platform.'
            },
            {
                title: 'Partners',
                content: 'Collaborate and build with Acala members, integrate Acala stablecoin into your products and services.'
            },
            {
                title: 'Investors',
                content: 'Talk to us about investing in Acala Network, Laminar and Polkawallet venture portfolio.'
            }
        ]
    },
    footer: {
        follow: {
            title: 'Follow us',
            list: [
                {
                    icon: twitter,
                    name: 'twitter',
                    href: 'https://twitter.com/AcalaNetwork',
                    target: '_blank',
                },
                // {
                //     icon: facebook,
                //     name: 'facebook',
                //     href: '',
                //     target: '_blank',
                // },
                // {
                //     icon: googlePlus,
                //     name: 'google plus',
                //     href: '',
                //     target: '_blank',
                // },
                // {
                //     icon: googleDeveloper,
                //     name: 'google developers',
                //     href: '',
                //     target: '_blank',
                // },
                // {
                //     icon: youtube,
                //     name: 'youtube',
                //     href: '',
                //     target: '_blank',
                // },
                {
                    icon: medium,
                    name: 'medium',
                    href: 'https://medium.com/@AcalaNetwork',
                    target: '_blank',
                },
            ]
        },
        menu: [
            {
                name: 'Contact',
                target: '_blank',
                href: 'mailto:hello@acala.network',
            },
            // {
            //     name: 'Feedback',
            //     href: 'mailto:hello@acala.network',
            //     target: '_blank',
            // },
            {
                name: 'Terms',
                target: '_blank',
            }
        ]
    }
};

export default config;

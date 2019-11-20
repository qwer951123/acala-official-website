import React, { ReactNode } from 'react';
import { SiteConfig } from '@/types';

export const ConfigContext = React.createContext<SiteConfig>({} as SiteConfig);

interface IProps {
    children: ReactNode,
    config: SiteConfig,
}

const ConfigProvider: React.FC<IProps> = ({ children, config }) => {
    return (
        <ConfigContext.Provider value={config}>
            {children}
        </ConfigContext.Provider>
    );
};

export default ConfigProvider;

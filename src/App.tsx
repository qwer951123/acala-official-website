import React from 'react';
import Home from '@/pages/home';
import ConfigProvider from '@/provider/config';
import config from './config';
import './app.scss';

const App: React.FC = () => {
    return (
        <ConfigProvider config={config}>
            <div className={'app'}>
                <Home />
            </div>
        </ConfigProvider>
    );
}

export default App;

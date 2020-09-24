import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Index from './pages/Index';
import Hiring from './pages/Hiring';

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path=''>
          <Index />
        </Route>
        <Route path='/hiring'>
          <Hiring />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;

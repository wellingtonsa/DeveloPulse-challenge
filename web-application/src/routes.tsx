import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import path from 'constants/path';

import Home from 'pages/Home';

const Routes:React.SFC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path={path.routes.HOME} component={Home} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
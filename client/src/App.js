/* React */
import React from 'react';
import { Route, Switch } from 'react-router-dom';

/* Custom Components */
import Login from './Login';
import Dashboard from './Dashboard';

const App = () => (
    <Switch>
      <Route exact path='/login' component= {Login} />
      <Route exact path='/dashboard' component= {Dashboard} />
    </Switch>
);

export default App;

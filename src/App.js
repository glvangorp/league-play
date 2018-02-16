/* React */
import React from 'react';
import { Route, Switch } from 'react-router-dom';

/* Custom Components */
import Login from './Login';

const App = () => (
    <Switch>
      <Route path='/' component= {Login} />
      <Route exact path='/login' component= {Login} />
    </Switch>
);

export default App;

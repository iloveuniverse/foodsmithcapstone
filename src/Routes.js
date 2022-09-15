import React from 'react';
import { Route, Switch }  from 'react-router-dom';
import Home from './Pages/Home'
import Search from './Pages/Search';


export default () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/search" component={Search} />
    </Switch>
);
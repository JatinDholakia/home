import React from "react";
import { Switch, Route } from 'react-router-dom';
import App from './App';
import Corrector from './Corrector';

export default (
    <Switch>
    <Route path="/" component={App}></Route>
    <Route path="/corrector" component={Corrector} />
    </Switch>
  );
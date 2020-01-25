import React from 'react';
import PokeList from './components/PokeList/index';
import Home from './components/Home/index';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import './General.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Home}/>
        <Route path="/list" component={PokeList}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

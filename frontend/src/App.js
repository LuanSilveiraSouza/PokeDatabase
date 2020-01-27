import React, {useEffect, useState} from 'react';
import PokeList from './components/PokeList/index';
import Home from './components/Home/index';
import pokeApi from './services/pokeApi';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import './General.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {

  const [pokemons, setPokemons] = useState([]);
  const [natures, setNatures] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function loadData() {
        let res = await pokeApi.get('pokemon/?offset=0&limit=807');
        
        res.data.results.map(pokemon => (
            setPokemons(pokemons => [...pokemons, {value: pokemon.url, label: pokemon.name}])
        ));

        res = await pokeApi.get('item-attribute/7/');

        res.data.items.map(item => (
            setItems(items => [...items, {value: item.url, label: item.name}])
        ));

        res = await pokeApi.get('nature?offset=0&limit=25');

        res.data.results.map(nature => (
            setNatures(natures => [...natures, {value: nature.url, label: nature.name}])
        ));
    }
    loadData();
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} render={(props) => <Home {...props} pokemons={pokemons} natures={natures} items={items}/>}/>
        <Route path="/list" component={PokeList}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

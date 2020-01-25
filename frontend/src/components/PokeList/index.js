import React, {useState, useEffect} from 'react';
import api from '../../services/api';
import Header from '../Header/index';
import PokeItem from '../PokeItem/index';

import '../../General.css';
import 'bootstrap/dist/css/bootstrap.css';

function PokeList() {
  const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
      async function loadPokemons() {
        const res = await api.get('/pokemon');

        setPokemons(res.data);
      }
      loadPokemons();
    }, [pokemons]);

  return (
    <div className="App d-flex justify-content-center">
      <div className="screen mx-5 w-75 my-3"> 
        <Header/>
          <div className="d-flex flex-column">
            {pokemons.map(pokemon => (
              pokemon.shiny ?(
                <PokeItem key={pokemon._id} pokemon={pokemon} 
                img={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/'+pokemon.pkdx+'.png'} />
              ) : (
                <PokeItem key={pokemon._id} pokemon={pokemon} 
                img={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+pokemon.pkdx+'.png'} />
              )
            ))}
          </div>
      </div>
    </div>
  );
}

export default PokeList;

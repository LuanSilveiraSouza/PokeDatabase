import React, {useState, useEffect} from 'react';
import Select from 'react-select';
import pokeApi from '../../services/pokeApi';

function Form() {

    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        async function loadPokemons() {
            const res = await pokeApi.get('pokemon/?offset=0&limit=807');
            
            res.data.results.map(pokemon => (
                setPokemons(pokemons => [...pokemons, {value: pokemon.url, label: pokemon.name}])
            ));
        }
        loadPokemons();
    }, []);

    return(
        <form className="mx-5 mb-3">
            <div className="row">
                <div className="col-6 form-group">
                    <label>Nome do Pokémon</label>
                    {/*<select className="form-control" >
                        {pokemons.map(pokemon => (
                            <option className="text-capitalize">{pokemon.name}</option>
                        ))}
                        </select>*/}
                    <Select options={pokemons} className="text-capitalize"/>
                </div>
                <div className="col-3 form-group">
                <label>Número Pokedex</label>
                <select className="form-control">
                    <option>001</option>
                    <option>004</option>
                    <option>009</option>
                    <option>004</option>
                </select>
                </div>
                <div className="col-3 form-group">
                    <label>Gênero</label>
                    <select className="form-control">
                        <option>Feminino</option>
                        <option>Masculino</option>
                    </select>
                </div>
            </div>
            <div className="row">
                <div className="col form-group">
                    <label>Nature</label>
                    <select className="form-control">
                        <option>Feminino</option>
                        <option>Masculino</option>
                    </select>
                </div>
                <div className="col form-group">
                    <label>Ability</label>
                    <select className="form-control">
                        <option></option>
                        <option></option>
                    </select>
                </div>
                <div className="col-2 form-group">
                    <label>Shiny</label>
                    <div className="form-check">     
                        <input className="form-check-input" type="radio" value="false" name="radioShiny" checked></input>
                        <label className="form-check-label">Não</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" value="true" name="radioShiny"></input>
                        <label className="form-check-label">Sim</label>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="form-group col-4">
                    <label>Item</label>
                    <select className="form-control">
                        <option></option>
                        <option></option>
                    </select>
                </div>
                <div className="form-group col-8">
                    <label>Moves</label>
                    <div className="row mb-3">
                        <select className="form-control col mr-3">
                            <option></option>
                        </select>
                        <select className="form-control col">
                            <option></option>
                        </select>
                    </div>
                    <div className="row">
                        <select className="form-control col mr-3">
                            <option></option>
                        </select>
                        <select className="form-control col">
                            <option></option>
                        </select>
                    </div>
                </div>
            </div>
        </form>
    );

}

export default Form;
import React, {useState, useEffect} from 'react';
import api from '../../services/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPen, faMars, faVenus, faGenderless } from '@fortawesome/free-solid-svg-icons';

import 'bootstrap/dist/css/bootstrap.css';
import './styles.css'

function PokeItem( props ) {
    const {pokemon, img} = props;
    const [isShiny, setIsShiny] = useState('');

    useEffect(() => {
        if(pokemon.shiny) {
            setIsShiny('Yes');
        } else{
            setIsShiny('No');
        }
    }, [pokemon.shiny]);

    async function clickDelete(e) {
        e.preventDefault();

        await api.delete('/pokemon?id='+ pokemon._id);

        alert("Pokémon Excluido");
    }

    return (
        <div className="row my-3 mx-5 bg-white border text-capitalize">
            <img className="w-25 h-25 col-3 border-right" src={img} alt="img"></img>
            <div className="col-9 row pl-5">
                <div className="col-8">
                    <div className="pt-3 d-flex justify-content-center">
                        <h3 className="bg w-50 text-center py-2">{pokemon.name} #{pokemon.pkdx}</h3>
                    </div>
                    <div className="row">
                        <div className="col pt-3">
                            <p>Id: {pokemon._id}</p>
                            <p>Gender: {pokemon.gender} 
                                {(() => {
                                    switch(pokemon.gender) {
                                    case 'male':
                                        return <FontAwesomeIcon icon={faMars} size="lg" className="trash-btn ml-1"/>;
                                    case 'female':
                                        return <FontAwesomeIcon icon={faVenus} size="lg" className="trash-btn ml-1"/>;
                                    case 'genderless':
                                        return <FontAwesomeIcon icon={faGenderless} size="lg" className="trash-btn ml-1"/>;
                                    default:
                                        return null;
                                    }
                                })()}
                            </p>
                            <p>Shiny: {isShiny}</p>
                        </div>
                        <div className="col pt-3">
                            <p>Nature: {pokemon.nature}</p>
                            <p>Ability: {pokemon.ability}</p>
                            <p>Item: <img alt="" src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/'+pokemon.item+'.png'}/> 
                            {pokemon.item}</p>
                        </div>
                    </div>
                </div>
                <div className="col-4 d-flex align-self-center justify-content-between">
                    <div>
                        <h5 className="py-1 bg text-center px-2">Moves</h5>
                        {pokemon.moves.map(move =>(
                            <p>{move}</p>
                        ))}
                    </div>
                    <div>
                        <button type="button" className="btn">
                            <FontAwesomeIcon icon={faPen} size="lg" className="pen-btn"/>
                        </button>
                        <button type="button" className="btn" onClick={clickDelete}>
                            <FontAwesomeIcon icon={faTrash} size="lg" className="trash-btn"/>
                        </button>
                    </div>
                </div>
            </div>
        </div>                
    );
}

export default PokeItem;
import React, {useState} from 'react';
import Select from 'react-select';
import pokeApi from '../../services/pokeApi';
import api from '../../services/api';

function Form(props) {

    const genders = [
                    {value: 'female', label: 'feminino'},
                    {value: 'male', label: 'masculino'},
                    {value: 'genderless', label: 'Sem Gênero'},
                    ];
    const pokemons = props.pokemons;
    const natures = props.natures;
    const items = props.items;

    const [pokemon, setPokemon] = useState({});

    const [gender, setGender] = useState({});

    const [isShiny, setShiny] = useState();

    const [nature, setNature] = useState({});

    const [abilities, setAbilities] = useState([]);
    const [ability, setAbility] = useState({});

    const [item, setItem] = useState({});

    const [moves, setMoves] = useState([]);
    const [move1, setMove1] = useState({});
    const [move2, setMove2] = useState({});
    const [move3, setMove3] = useState({});
    const [move4, setMove4] = useState({});

    async function handleChangePokemon(pokemon) {
        const res = await pokeApi.get(`pokemon/${pokemon.label}`);

        setPokemon(res.data);

        setAbilities([]);
        res.data.abilities.map(ability => (
            setAbilities(abilities => [...abilities, {value: ability.ability.url, label: ability.ability.name}])
        ));

        setMoves(null);
        setMoves([]);
        res.data.moves.map(move => (
            setMoves(moves => [...moves, {value: move.move.url, label: move.move.name}])
        ));
    };

    function handleChangeAbility(ability) {
        setAbility(ability);
    };

    function handleChangeNature(nature) {
        setNature(nature);
    };

    function handleChangeItem(item) {
        setItem(item);
    };

    function handleChangeGender(gender) {
        setGender(gender);
    };

    function handleMove1(move1) {
        if(move1 !== move2 && move1 !== move3 && move1 !== move4){
            setMove1(move1);
        }
    };

    function handleMove2(move2) {
        setMove2(move2);
    };

    function handleMove3(move3) {
        setMove3(move3);
    };

    function handleMove4(move4) {
        setMove4(move4);
    };

    function handleShiny(event) {
        setShiny(event.target.value === 'true' ? true : false);
    }

    async function submitForm(event) {
        event.preventDefault();
        
        const submit = {
            "name": pokemon.name,
            "pkdx": pokemon.id,
            "nature": nature.label,
            "gender": gender.value,
            "ability": ability.label,
            "item": item.label,
            "moves": [
                move1.label,
                move2.label,
                move3.label,
                move4.label,
            ],
            "shiny": isShiny
        };
        
        if(submit.name && submit.pkdx && submit.nature && submit.gender && submit.ability){
            await api.post('/pokemon', submit);

            alert("Pokémon Adicionado");
        } else{
            alert("Pokémon incompleto");
        }

    }

    return(
        <form className="mx-5 mb-3 text-capitalize" onSubmit={submitForm}>
            <div className="row">
                <div className="col-6 form-group">
                    <label>Nome do Pokémon</label>
                    <Select options={pokemons} onChange={handleChangePokemon} autoFocus={true}
                    defaultValue={{value:'https://pokeapi.co/api/v2/pokemon/1/', label:'bulbasaur'}}/>
                </div>
                <div className="col-3 form-group">
                <label>Número Pokedex</label>
                    <h5>#{pokemon.id}</h5>
                </div>
                <div className="col-3 form-group">
                    <label>Gênero</label>
                    <Select options={genders} value={gender} onChange={handleChangeGender} placeholder=""/>
                </div>
            </div>
            <div className="row">
                <div className="col form-group">
                    <label>Nature</label>
                    <Select options={natures} value={nature} onChange={handleChangeNature} placeholder=""/>
                </div>
                <div className="col form-group">
                    <label>Ability</label>
                    <Select options={abilities} value={ability} onChange={handleChangeAbility} placeholder=""/>
                </div>
                <div className="col-2 form-group">
                    <label>Shiny</label>
                    <div className="form-check">     
                        <input className="form-check-input" type="radio" value="false" onChange={handleShiny} checked={isShiny === "false" || isShiny === false}></input>
                        <label className="form-check-label">Não</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" value="true" onChange={handleShiny} checked={isShiny === "true" || isShiny === true}></input>
                        <label className="form-check-label">Sim</label>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="form-group col-4">
                    <label>Item</label>
                    <Select options={items} value={item} onChange={handleChangeItem} placeholder=""/>
                </div>
                <div className="form-group col-8">
                    <label>Moves</label>
                    <div className="row mb-3">
                        <Select options={moves} value={move1} onChange={handleMove1} placeholer="" className="col mr-3"/>
                        <Select options={moves} value={move2} onChange={handleMove2} placeholder="" className="col"/>
                    </div>
                    <div className="row">
                    <Select options={moves} value={move3} onChange={handleMove3} placeholder="" className="col mr-3"/>
                    <Select options={moves} value={move4} onChange={handleMove4} placeholder="" className="col"/>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center">
                <button type="submit" value="submit" className="btn btn-success btn-lg">Adicionar</button>
            </div>
        </form>
    );

}

export default Form;
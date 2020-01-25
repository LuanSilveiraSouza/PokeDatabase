import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import img from '../../img/pokemon.png'
import './styles.css';

function Header() {
    return (
        <>
            <header className="App-header d-flex justify-content-center mt-3 mb-5">
                <img src={img} className="img-fluid h-50 w-50" alt="pokemon-logo"></img>   
            </header>
            <ul className="nav mx-5 d-flex justify-content-center">
                <li className="nav-item">
                    <button className="nav-link btn">
                        <Link to="/">Home</Link>
                    </button>
                </li>
                <li className="nav-item">
                    <button className="nav-link btn">
                        <Link to="/list">Listar</Link>
                    </button>
                </li>
            </ul> 
        </>
    );
}

export default Header;
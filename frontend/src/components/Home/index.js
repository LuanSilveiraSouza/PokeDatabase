import React from 'react';
import Header from '../Header/index';
import Form from '../Form/index';

import '../../General.css';
import 'bootstrap/dist/css/bootstrap.css';

function Home() {

  return (
    <div className="App d-flex justify-content-center">
      <div className="screen mx-5 w-75 my-3"> 
        <Header/>

        <h1 className="text-center my-5">Adicionar Pokémon</h1>

        <Form></Form>
      </div>
    </div>
  );
}

export default Home;

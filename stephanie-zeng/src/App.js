import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Header } from './components/Header';
import { SearchField } from './components/SearchField';
import { Button } from './components/Button';
import { Pokemon, PokemonCard } from './components/PokemonCard';
import { PokeList } from './components/PokeList';
import { Footer } from './components/Footer';

import pokeBall from './images/pokeball.png';

const App = ({ pokeList }) => {
    return (
      <div className="App">
        <Header title={"Gotta Fetch 'em all!"}/>
        {pokeList.length > 0 && <PokeList list={pokeList} />}
        {pokeList.length === 0 &&
          <PokemonCard />
        }
      <Footer credit={"Gotta Fetch 'em All Assignment / Coded by Stephanie Zeng"}/>
      </div>
    );
};

const mapStateToProps = (state) => ({
  pokeList: state.pokeList
});

export default connect(mapStateToProps)(App);

import React, { Component } from 'react';

import { Header } from './components/Header';
import { SearchField } from './components/SearchField';
import { Button } from './components/Button';
import { PokemonCard } from './components/PokemonCard';
import { Footer } from './components/Footer';

import pokeBall from './images/pokeball.png';

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      searchTerm: '',
      pokeName: 'No Pokémon Around',
      pokeImage: pokeBall
    }
  }

  updateSearchTerm = (e) => {
    this.setState({
      searchTerm: e.target.value
    });
  }

  submitSearchTerm = () => {
    const pokemonName = this.state.searchTerm.toLowerCase();
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then(res => res.json())
    .then(pokemon => {
      const pokeName = pokemon.name;
      const pokeImage = pokemon.sprites.front_default;
      this.setState({
        pokeName,
        pokeImage
      });
    })
    .catch(err => {
      this.setState({
        pokeName: "Pokémon Not Found",
        pokeImage: pokeBall
      });
    });
  }

  render() {
    return (
      <div className="App">
        <Header title={"Gotta Fetch 'em all!"}/>
        <div className="SearchBar">
          <SearchField updateSearchTerm={this.updateSearchTerm}/>
          <Button submitSearchTerm={this.submitSearchTerm}/>
        </div>
        <PokemonCard
          pokeName={this.state.pokeName}
          pokeImage={this.state.pokeImage}
        />
      <Footer credit={"Gotta Fetch 'em All Assignment / Coded by Stephanie Zeng"}/>
      </div>
    );
  }
}

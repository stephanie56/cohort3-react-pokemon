import React, { Component } from 'react';

import { Header } from './components/Header';
import { SearchBar } from './components/SearchBar';
import { PokemonCard } from './components/PokemonCard';

import pokeBall from './images/pokeball.png';

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      searchTerm: '',
      pokeName: '',
      pokeImage: ''
    }
  }

  updateSearchTerm = (e) => {
    console.log(e.target.value);
    this.setState({
      searchTerm: e.target.value
    });
  }

  submitSearchTerm = (e) => {
    e.preventDefault();
    const pokemonName = this.state.searchTerm.toLowerCase();
    const data = fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      const pokeName = data.name;
      const pokeImage = data.sprites.front_default;
      this.setState({
        pokeName,
        pokeImage
      });
    })
    .catch(data => {
      console.log(pokeBall);
      this.setState({
        pokeName: "Pokemon Not Found",
        pokeImage: pokeBall
      });
    });
  }

  render() {
    return (
      <div className="App">
        <Header title={"Gotta Fetch em all!"}/>
        <SearchBar
          updateSearchTerm={this.updateSearchTerm}
          submitSearchTerm={this.submitSearchTerm}
        />
        <PokemonCard
          pokeName={this.state.pokeName}
          pokeImage={this.state.pokeImage}
        />
      </div>
    );
  }
}

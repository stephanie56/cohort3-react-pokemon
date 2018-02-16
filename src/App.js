import React, { Component } from 'react';

import { Header } from './components/Header';
import { SearchBar } from './components/SearchBar';
import { PokemonCard } from './components/PokemonCard';


export default class App extends Component {
  constructor(){
    super();
    this.state = {
      searchTerm: '',
      name: '',
      imgUrl: ''
    }
  }

  componentDidMount(){
    const data = fetch('https://pokeapi.co/api/v2/pokemon/25/')
    .then(res => res.json())
    .then(data => {
      console.log(data);
      const pokemonName = data.name;
      const pokemonImage = data.sprites.front_default;
      this.setState({
        name: pokemonName,
        imgUrl: pokemonImage
      });

    });
  }

  render() {
    return (
      <div className="App">
        <Header title={"Gotta Fetch em all!"}/>
        <SearchBar />
        <PokemonCard
          name={this.state.name}
          imgSrc={this.state.imgUrl}
        />
      </div>
    );
  }
}

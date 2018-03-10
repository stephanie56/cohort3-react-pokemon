import React, { Component } from 'react';

import { Header } from './components/Header';
import { SearchField } from './components/SearchField';
import { Button } from './components/Button';
import { Pokemon, PokemonCard } from './components/PokemonCard';
import { Footer } from './components/Footer';

import pokeBall from './images/pokeball.png';

const PokeList = ({list}) => {
  return (
    <ul className="PokeList">
      {list.map(({name, image}) => {
        console.log(image);
        return <li key={name}><img src={image} />{name}</li>;
      })}
    </ul>
  );
}

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      searchTerm: '',
      pokeName: 'No Pokémon Around',
      pokeImage: pokeBall,
      pokeList: [],
      isLoading: false
    }
  }

  fetchPokemon = (name) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then(res => res.json())
    .then(pokemon => {
      console.log(pokemon);
      if(pokemon.results){
        return pokemon.results;
      } else {
        const pokeName = pokemon.name;
        const pokeImage = pokemon.sprites.front_default;
        this.setState({
          pokeName,
          pokeImage,
          isLoading: false
        });
      }
    })
    .then(data => {
      const pokemonList = data.map((pokemon) => {
        fetch(pokemon.url)
        .then(res => res.json())
        .then(item => {
           pokemon.image = item.sprites.front_default;
        });
        console.log(pokemon);
        return pokemon;
      });

      this.setState({
        pokeList: pokemonList,
        isLoading: false
      });
    })
    .catch(err => {
      this.setState({
        pokeName: "Pokémon Not Found",
        isLoading: false
      });
    });
  }

  updateSearchTerm = (e) => {
    this.setState({
      searchTerm: e.target.value
    });
  }

  submitSearchTerm = () => {
    const pokemonName = this.state.searchTerm.toLowerCase();
    this.setState({
      pokeList: [],
      isLoading: true
    });
    this.fetchPokemon(pokemonName);
  }

  render() {
    console.log(this.state.pokeList);
    return (
      <div className="App">
        <Header title={"Gotta Fetch 'em all!"}/>
        <div className="SearchBar">
          <SearchField inputValue={this.state.searchTerm} updateSearchTerm={this.updateSearchTerm}/>
          <Button submitSearchTerm={this.submitSearchTerm}>Fetch a Pokemon</Button>
        </div>
        {this.state.pokeList.length > 0 && <PokeList list={this.state.pokeList} />}
        {this.state.pokeList.length === 0 &&
          <PokemonCard
            {...this.state}
            loadingMessage={"Searching for Pokémon Info..."}
          />}
      <Footer credit={"Gotta Fetch 'em All Assignment / Coded by Stephanie Zeng"}/>
      </div>
    );
  }
}

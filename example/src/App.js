import React, { Component } from "react";
import "./App.css";

// use this to fetch data
const fetchPokemon = idOrName =>
  fetch(`http://pokeapi.co/api/v2/pokemon/${idOrName}`)
    .then(response => response.json())
    .then(pokemonData => ({
      name: pokemonData.name,
      picture: pokemonData.sprites.front_default
    }));

class App extends Component {
  render() {
    return <div className="App">your app here!</div>;
  }
}

export default App;

import React, { Component } from 'react';

import pokeBallImage from './images/pokeball.png';

const Header = ({ title }) => <header>{ title }</header>;

const SearchBar = (props) => {
  return(
    <form>
      <input type="text" />
      <input type="submit" value="Fetch a Pokemon!" />
    </form>
  );
};

const PokemonCard = ({ name, imgSrc }) => {
  return (
    <div className="Pokemon">
      <img className="Pokemon__image"
        src={imgSrc}
        alt={name} />
      <h1>{name}</h1>
    </div>
  );
}

PokemonCard.defaultProps = {
  name: 'No Pokemon Around',
  imgSrc: pokeBallImage
};

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title={"Gotta Fetch em all!"}/>
        <SearchBar />
        <PokemonCard />
      </div>
    );
  }
}

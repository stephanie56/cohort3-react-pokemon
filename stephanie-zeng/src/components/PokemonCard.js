import React from 'react';
import pokeBallImage from '../images/pokeball.png';


const capitalizeFirstLetter = str => {
  return typeof str === 'string' ? str.slice(0, 1).toUpperCase() + str.slice(1) : str;
};

export const PokemonCard = ({ pokeName, pokeImage }) => {
  const displayName = capitalizeFirstLetter(pokeName);
  return (
    <div className="Pokemon">
      <img className="Pokemon__image"
        src={ pokeImage }
        alt={ displayName } />
      <h1>{ displayName }</h1>
    </div>
  );
}

PokemonCard.defaultProps = {
  name: 'No Pokemon Around',
  imgSrc: pokeBallImage
};

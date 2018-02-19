import React from 'react';
import pokeBallImage from '../images/pokeball.png';

const capitalizeFirstLetter = str => {
  return typeof str === 'string' ? str.slice(0, 1).toUpperCase() + str.slice(1) : str;
};

export const PokemonCard = ({ pokeName, pokeImage, isLoading }) => {
  const displayName = capitalizeFirstLetter(pokeName);
  return (
    <div className="Card">
      {
        isLoading ?
        (
          <div className="Card__msg">
            Searching for Pokemon Info...
          </div>
        ) :
        (
          <div className="Card__pokemon">
            <img className="Card__image"
              src={ pokeImage }
              alt={ displayName }
            />
            <h1>{ displayName }</h1>
          </div>
        )
      }
    </div>
  );
}

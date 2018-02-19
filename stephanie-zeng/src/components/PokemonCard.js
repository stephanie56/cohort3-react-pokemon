import React from 'react';
import { capitalizeFirstLetter } from '../utils';

const LoadingIndicator = msg => <div className="Card__msg">{ msg }</div>;

const Pokemon = (name, image) => {
  return (
    <div className="Card__pokemon">
      <img className="Card__image"
        src={ image }
        alt={ name }
      />
    <h1>{ name }</h1>
    </div>
  );
};

export const PokemonCard = ({ pokeName, pokeImage, isLoading, loadingMessage }) => {
  return (
    <div className="Card">
      {
        isLoading ?
        LoadingIndicator(loadingMessage) :
        Pokemon(capitalizeFirstLetter(pokeName), pokeImage)
      }
    </div>
  );
}

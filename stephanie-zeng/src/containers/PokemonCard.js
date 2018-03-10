import React from 'react';
import { connect } from 'react-redux';

import { Pokemon, LoadingIndicator } from '../components/Pokemon';
import { capitalizeFirstLetter } from '../utils';


const PokemonCard = ({ pokeName, pokeImage, isLoading, loadingMessage }) => {
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

const mapStateToProps = (state) => ({
  pokeName: state.pokeName,
  pokeImage: state.pokeImage,
  isLoading: state.isLoading,
  loadingMessage: state.loadingMessage
});

export default connect(mapStateToProps)(PokemonCard);

import { capitalizeFirstLetter } from '../utils';

const POKEMON_BASE_URL = 'https://pokeapi.co/api/v2/pokemon/';

export const ACTION_TYPES = {
  updateSearchTerm: 'UPDATE_SEARCHTERM',
  loadingPokemon: 'LOADING_POKEMON',
  getPokemonList: 'GET_POKEMON_LIST',
  getPokemonSuccess: 'GET_POKEMON_SUCCESS',
  getPokemonError: 'GET_POKEMON_ERROR'
};

export const updateSearchTerm = (val) => ({
  type: ACTION_TYPES.updateSearchTerm,
  payload: val
});

export const loadingPokemon = (loadingStatus) => ({
    type: ACTION_TYPES.loadingPokemon,
    payload: loadingStatus
  });

export const getPokemonList = (props) => ({
    type: ACTION_TYPES.getPokemonList,
    payload: props.results
  });

export const getPokemonSuccess = (props) => ({
    type: ACTION_TYPES.getPokemonSuccess,
    payload: {
      name: props.name,
      image: props.sprites.front_default
    }
  });

export const getPokemonError = (errorMessage) => ({
    type: ACTION_TYPES.getPokemonError,
    payload: errorMessage
  });

export const getPokemon = () => {
  return (dispatch, getState) => {
    const { searchTerm } = getState();
    const query = capitalizeFirstLetter(searchTerm);
    dispatch(loadingPokemon(true));

    fetch(`${POKEMON_BASE_URL}${searchTerm}`)
    .then(res => res.json())
    .then(pokemon => {
      dispatch(loadingPokemon(false));
      pokemon.result ? dispatch(getPokemonList(pokemon)) : dispatch(getPokemonSuccess(pokemon))
    })
    .catch(err => {
      dispatch(loadingPokemon(false));
      dispatch(getPokemonError('Pokémon Not Found'));
    });
  };
};

import {ACTION_TYPES} from '../actions';
import pokeBall from '../images/pokeball.png';

const INITIAL_STATE = {
  searchTerm: '',
  pokeName: 'No Pokémon Around',
  pokeImage: pokeBall,
  pokeList: [],
  isLoading: false,
}

export const reducer = (state = INITIAL_STATE, {type, payload}) => {
  switch (type) {
    case ACTION_TYPES.updateSearchTerm:
      return {...state, searchTerm: payload};
    case ACTION_TYPES.loadingPokemon:
      return {...state, isLoading: payload};
    case ACTION_TYPES.getPokemonSuccess:
      return {...state, pokeName: payload.name, pokeImage: payload.image};
    case ACTION_TYPES.getPokemonError:
      return {...state, pokeName: payload};
    default:
      return state;
  }
};

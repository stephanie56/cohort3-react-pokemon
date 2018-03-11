import {ACTION_TYPES} from '../actions';
import pokeBall from '../images/pokeball.png';

const INITIAL_STATE = {
  searchTerm: '',
  pokeName: 'No Pokémon Around',
  pokeImage: pokeBall,
  pokeList: [],
  isLoading: false,
  loadingMessage: ''
}

export const reducer = (state = INITIAL_STATE, {type, payload}) => {
  switch (type) {
    case ACTION_TYPES.updateSearchTerm:
      return {...state, searchTerm: payload};
    case ACTION_TYPES.submitSearchTerm:
      console.log(payload);
      // return {...state, pokeList.concat(payload)};
    default:
      return state;
  }
};

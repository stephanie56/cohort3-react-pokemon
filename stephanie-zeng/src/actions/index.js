export const ACTION_TYPES = {
  updateSearchTerm: 'UPDATE_SEARCHTERM',
  submitSearchTerm: 'SUBMIT_SEARCHTERM',
};

export const updateSearchTerm = (val) => ({
  type: ACTION_TYPES.updateSearchTerm,
  payload: val
});

export const getPokemon = () => {
  return (dispatch, getState) => {
    const { searchTerm } = getState();
    fetch(`https://pokeapi.co/api/v2/pokemon/pikachu`)
    .then(res => res.json())
    .then(pokemon => {
      console.log('fetching');
      dispatch({
      type: ACTION_TYPES.submitSearchTerm,
      payload: pokemon.results
    })})
    .catch(err => {
      console.log(err);
    });
  };
};

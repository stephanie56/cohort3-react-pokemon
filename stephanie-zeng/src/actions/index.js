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
    console.log(searchTerm);
    fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm}`)
    .then(res => res.json())
    .then(pokemon => {
      const pokeName = pokemon.name;
      const pokeImage = pokemon.sprites.front_default;
      dispatch({
      type: ACTION_TYPES.submitSearchTerm,
      payload: {
        pokeName,
        pokeImage
      }
    })})
    .catch(err => {
      console.log(err);
    });
  };
};

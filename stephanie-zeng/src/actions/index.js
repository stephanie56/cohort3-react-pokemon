export const ACTION_TYPES = {
  updateSearchTerm: 'UPDATE_SEARCHTERM',
  submitSearchTerm: 'SUBMIT_SEARCHTERM',
};

export const updateSearchTerm = (val) => ({
  type: ACTION_TYPES.updateSearchTerm,
  payload: val
});

export const submitSearchTerm = () => ({
  type: ACTION_TYPES.submitSearchTerm
});

import React from 'react';

export const SearchBar = ({ updateSearchTerm, submitSearchTerm }) => {
  return(
    <form onSubmit= {submitSearchTerm}>
      <input type="text" onChange={updateSearchTerm}/>
      <input type="submit" value="Fetch a Pokemon!" />
    </form>
  );
};

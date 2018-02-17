import React from 'react';

export const SearchBar = ({ submitSearchTerm }) => {
  return(
    <form onSubmit= {submitSearchTerm}>
      <input type="text" />
      <input type="submit" value="Fetch a Pokemon!" />
    </form>
  );
};

import React from 'react';

export const SearchBar = ({ updateSearchTerm, submitSearchTerm }) => {
  return(
    <form className="SearchBar" onSubmit= {submitSearchTerm}>
      <input type="text" onChange={updateSearchTerm}/>
      <input type="submit" value="Fetch a Pokemon!" />
    </form>
  );
};

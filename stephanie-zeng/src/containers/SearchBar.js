import React from 'react';
import { connect } from 'react-redux';

import {searchTerm, updateSearchTerm, submitSearchTerm} from './actions/';

const SearchBar = ({searchTerm, updateSearchTerm, submitSearchTerm}) => {
  return (
    <div className="SearchBar">
      <SearchField inputValue={searchTerm} updateSearchTerm={updateSearchTerm}/>
      <Button submitSearchTerm={submitSearchTerm}>Fetch a Pokemon</Button>
    </div>
  );
};


const mapDispatchToProps = {
  searchTerm,
  updateSearchTerm,
  submitSearchTerm
};

export connect(null, mapDispatchToProps)(SearchBar);

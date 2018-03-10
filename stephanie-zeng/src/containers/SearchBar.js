import React from 'react';
import { connect } from 'react-redux';

import { SearchField } from '../components/SearchField';
import { Button } from '../components/Button';

import {updateSearchTerm, submitSearchTerm} from '../actions/';

const SearchBar = ({searchTerm, updateSearchTerm, submitSearchTerm}) => {
  return (
    <div className="SearchBar">
      <SearchField
        inputValue={searchTerm} updateSearchTerm={(e) => updateSearchTerm(e.target.value)}
      />
      <Button submitSearchTerm={submitSearchTerm}>Fetch a Pokemon</Button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  searchTerm: state.searchTerm
});
const mapDispatchToProps = {
  updateSearchTerm,
  submitSearchTerm
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);

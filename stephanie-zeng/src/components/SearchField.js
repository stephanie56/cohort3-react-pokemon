import React from 'react';

export const SearchField = ({ inputValue, updateSearchTerm }) => <input type="text" value={inputValue}  onChange={updateSearchTerm}/>;

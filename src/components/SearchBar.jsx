import React from 'react';

import TextInput from './TextInput';

const SearchBar = ({
  setKeywords,
}) => (
  <TextInput setText={setKeywords} />
);

export default SearchBar;

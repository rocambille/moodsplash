import React from 'react';

import Button from './Button';
import TextInput from './TextInput';

const SearchBar = ({
  setKeywords,
  onSearch,
}) => (
  <>
    <TextInput setText={setKeywords} />
    <Button onClick={onSearch}>
      Recherche
    </Button>
  </>
);

export default SearchBar;

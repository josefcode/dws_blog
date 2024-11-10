import React, { useState } from 'react';
import { IconSearch } from '@tabler/icons-react';
import {
  SearchContainer,
  StyledInput,
  SearchButtonWrapper,
} from './index.styled';
import { Button } from '../button';

const Search: React.FC = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [placeholder, setPlaceholder] = useState('Search');

  const handleFocus = () => {
    setIsFocused(true);
    setPlaceholder('');
  };

  const handleBlur = () => {
    setIsFocused(false);
    setPlaceholder('Search');
  };

  return (
    <SearchContainer>
      <StyledInput
        type="text"
        placeholder={placeholder}
        onFocus={handleFocus}
        onBlur={handleBlur}
        $isFocused={isFocused}
      />
      <SearchButtonWrapper>
        <Button variant="search" icon={<IconSearch />} />
      </SearchButtonWrapper>
    </SearchContainer>
  );
};

export default Search;

import React, { forwardRef, useEffect, useRef, useState } from 'react';
import { IconSearch, IconX } from '@tabler/icons-react';
import {
  SearchContainer,
  StyledInput,
  SearchButtonWrapper,
  SuggestionsDropdown,
  SuggestionItem,
} from './index.styled';
import { Button } from '../button';
import { SearchProps } from './types';

const Search = forwardRef<HTMLDivElement, SearchProps>(
  (
    {
      suggestions = ['Category 1', 'Category 2', 'Category 3', 'Category 4'],
      placeholder = 'Search',
      onSuggestionSelect,
      onInputChange,
      isFocused = false,
    }: SearchProps,
    ref,
  ) => {
    const [internalIsFocused, setInternalIsFocused] = useState(isFocused);
    const [searchValue, setSearchValue] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);
    const [filteredSuggestions, setFilteredSuggestions] = useState(suggestions);

    useEffect(() => {
      setInternalIsFocused(isFocused);
      if (isFocused && inputRef.current) {
        inputRef.current.focus();
      }
    }, [isFocused]);

    const handleFocus = () => setInternalIsFocused(true);

    const handleBlur = () => setInternalIsFocused(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const inputValue = e.target.value;
      setSearchValue(inputValue);

      const filtered = suggestions.filter((item) =>
        item.toLowerCase().includes(inputValue.toLowerCase()),
      );
      setFilteredSuggestions(filtered);

      if (onInputChange) {
        onInputChange(inputValue);
      }
    };

    const clearInput = () => {
      setSearchValue('');
      setFilteredSuggestions(suggestions);
    };

    const handleSuggestionSelect = (suggestion: string) => {
      setSearchValue(suggestion);
      setInternalIsFocused(false);

      if (onSuggestionSelect) {
        onSuggestionSelect(suggestion);
      }
    };

    return (
      <SearchContainer ref={ref}>
        <StyledInput
          ref={inputRef}
          type="text"
          placeholder={internalIsFocused ? '' : placeholder}
          value={searchValue}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleInputChange}
          $isFocused={internalIsFocused}
        />
        <SearchButtonWrapper onClick={searchValue ? clearInput : undefined}>
          {internalIsFocused ? (
            <IconX className="close_icon" />
          ) : (
            <Button variant="search" icon={<IconSearch />} />
          )}
        </SearchButtonWrapper>

        {internalIsFocused && filteredSuggestions.length > 0 && (
          <SuggestionsDropdown>
            {filteredSuggestions.map((suggestion, index) => (
              <SuggestionItem
                key={index}
                onMouseDown={() => handleSuggestionSelect(suggestion)}
              >
                {suggestion}
              </SuggestionItem>
            ))}
          </SuggestionsDropdown>
        )}
      </SearchContainer>
    );
  },
);

export default Search;

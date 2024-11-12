import React, { useState } from 'react';
import {
  DropdownContainer,
  DropdownButtonStyled,
  DropdownList,
  DropdownListItem,
  ButtonContent,
  ClearButton,
} from './index.styled';
import { IconChevronDown, IconX } from '@tabler/icons-react';
import { DropdownButtonProps } from './types';

const DropdownButton = ({
  label = 'Category',
  options,
}: DropdownButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleSelect = (e: React.MouseEvent, option: string) => {
    e.stopPropagation();
    if (!selectedOptions.includes(option)) {
      setSelectedOptions([...selectedOptions, option]);
    }
    toggleDropdown();
  };

  const clearSelection = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedOptions([]);
  };

  const renderLabel = () => {
    if (selectedOptions.length === 0) {
      return label;
    }
    return selectedOptions.slice(0, 2).join(', ');
  };

  return (
    <DropdownContainer onClick={() => toggleDropdown()}>
      <DropdownButtonStyled>
        <ButtonContent>
          {renderLabel()}
          {selectedOptions.length > 0 ? (
            <ClearButton onClick={clearSelection}>
              <IconX />
            </ClearButton>
          ) : (
            <IconChevronDown />
          )}
        </ButtonContent>
      </DropdownButtonStyled>

      {isOpen && (
        <DropdownList>
          {options.map((option) => (
            <DropdownListItem
              key={option}
              onClick={(e) => handleSelect(e, option)}
            >
              {option}
            </DropdownListItem>
          ))}
        </DropdownList>
      )}
    </DropdownContainer>
  );
};

export default DropdownButton;

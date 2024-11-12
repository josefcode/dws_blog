import React, { useState } from 'react';
import { FilterItemContainer } from './index.styled';

interface FilterItemProps {
  text: string;
  isSelected?: boolean;
  onClick?: () => void;
}

const FilterItem: React.FC<FilterItemProps> = ({
  text,
  isSelected = false,
  onClick,
}) => {
  return (
    <FilterItemContainer isSelected={isSelected} onClick={onClick}>
      {text}
    </FilterItemContainer>
  );
};

export default FilterItem;

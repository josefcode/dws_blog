import React, { useState } from 'react';
import { SortContainer, SortButton, SortIcon } from './index.styled';
import { IconArrowsUpDown } from '@tabler/icons-react';

const Sort: React.FC = () => {
  const [isNewestFirst, setIsNewestFirst] = useState(true);

  const handleToggle = () => {
    setIsNewestFirst(!isNewestFirst);
  };

  return (
    <SortContainer>
      <SortButton $isSelected={isNewestFirst} onClick={handleToggle}>
        {isNewestFirst ? 'Newest first' : 'Oldest first'}
        <SortIcon $isSelected={isNewestFirst}>
          <IconArrowsUpDown />
        </SortIcon>
      </SortButton>
    </SortContainer>
  );
};

export default Sort;

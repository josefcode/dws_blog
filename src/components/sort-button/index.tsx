import { useState } from 'react';
import { SortContainer, SortButton, SortIcon } from './index.styled';
import { IconArrowsUpDown } from '@tabler/icons-react';

const SortBtn = () => {
  const [isNewestFirst, setIsNewestFirst] = useState(false);

  const handleToggle = () => {
    setIsNewestFirst(!isNewestFirst);
  };

  return (
    <SortContainer>
      <SortButton $isSelected={isNewestFirst} onClick={handleToggle}>
        {isNewestFirst ? 'Oldest first' : 'Newest first'}
        <SortIcon $isSelected={isNewestFirst}>
          <IconArrowsUpDown />
        </SortIcon>
      </SortButton>
    </SortContainer>
  );
};

export default SortBtn;

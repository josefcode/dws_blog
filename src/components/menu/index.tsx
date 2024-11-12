import React, { useEffect, useRef, useState } from 'react';
import { IconSearch } from '@tabler/icons-react';
import {
  HeaderContainer,
  TitleContainer,
  MainTitle,
  Subtitle,
  Nav,
  Header,
} from './index.styled';
import { Button } from '../button';
import Search from '../search';
import useIsDesktop from '../../hooks/useIsDesktop';

const Menu = () => {
  const isDesktop = useIsDesktop();
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  const toggleSearch = () => setIsSearchVisible(!isSearchVisible);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setIsSearchVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <Header>
      <HeaderContainer $isSearchVisible={isSearchVisible}>
        {isSearchVisible ? null : (
          <TitleContainer>
            <h1>
              <MainTitle>dentsu</MainTitle>
              <Subtitle>world services</Subtitle>
            </h1>
          </TitleContainer>
        )}
        <div>
          {isDesktop || isSearchVisible ? (
            <Search ref={searchRef} />
          ) : (
            <Button
              variant="search"
              icon={<IconSearch />}
              onClick={toggleSearch}
            />
          )}
        </div>
      </HeaderContainer>
    </Header>
  );
};

export default Menu;

import React from 'react';
import {
  HeaderContainer,
  TitleContainer,
  MainTitle,
  Subtitle,
  Nav,
} from './index.styled';
import { IconSearch } from '@tabler/icons-react';
import { Button } from '../button';

const Menu = () => {
  return (
    <HeaderContainer>
      <TitleContainer>
        <h1>
          <MainTitle>dentsu</MainTitle>
          <Subtitle>world services</Subtitle>
        </h1>
      </TitleContainer>
      <Nav>
        <Button variant="search" icon={<IconSearch />} />
      </Nav>
    </HeaderContainer>
  );
};

export default Menu;

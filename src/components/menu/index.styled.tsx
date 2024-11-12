import styled from 'styled-components';
import { bodySmall, H2, H3 } from '../../config/themes';

export const Header = styled.header`
  border-bottom: 2px solid var(--neutral-extra-light);
`;

export const HeaderContainer = styled.nav<{ $isSearchVisible: boolean }>`
  display: ${(props) => (props.$isSearchVisible ? 'block' : 'flex')};
  justify-content: space-between;
  padding-block: 20px;
  max-width: 1380px;
  margin: 0 auto;
  align-items: center;

  @media (max-width: 768px) {
    padding-inline: 1rem;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: baseline;
`;

export const MainTitle = styled.span`
  ${H2}
  margin-right: 5px;
`;

export const Subtitle = styled.span`
  ${bodySmall}
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

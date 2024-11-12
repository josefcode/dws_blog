import styled from 'styled-components';
import { bodySmall, H2, H3 } from '../../config/themes';

export const HeaderContainer = styled.header<{ $isSearchVisible: boolean }>`
  display: ${(props) => (props.$isSearchVisible ? 'block' : 'flex')};
  justify-content: space-between;
  padding-block: 16px;
  padding-inline: 17rem;
  align-items: center;
  border-bottom: 2px solid var(--neutral-extra-light);

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

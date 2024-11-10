import styled from 'styled-components';
import { H2, H3 } from '../../config/themes';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border-bottom: 2px solid var(--neutral-extra-light);
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
  font-size: 1rem;
  font-weight: 400;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

import styled from 'styled-components';
import { bodyLarge } from '../../config/themes';

export const Root = styled.main`
  padding-inline: 17rem;
  @media (max-width: 768px) {
    padding-inline: 1rem;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding-block: 54px;

  .sort-text {
    display: flex;
    align-items: center;
    ${bodyLarge(600)}
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const HomeContainer = styled.section`
  display: grid;
  place-self: center;
  grid-template-columns: 1fr 3fr;
  align-items: start;
  gap: 32px;
  margin-block-end: 54px;

  @media (max-width: 768px) {
    gap: unset;
    align-items: unset;
    place-self: unset;
    grid-template-columns: 1fr;
  }
`;
export const HomeBtnsWrapper = styled.div`
  gap: 8px;
  padding-block: 16px;
  display: none;
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    flex-wrap: wrap;
  }
`;

import styled from 'styled-components';

export const StyledList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, minmax(auto, 1fr));
  gap: 24px;
  padding-bottom: 50px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

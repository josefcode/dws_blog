import styled from 'styled-components';
import { bodyLarge, H3 } from '../../../../config/themes';

export const FilterContainer = styled.aside`
  width: 100%;
  max-width: 300px;
  background-color: var(--neutrals-lightest);
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const FilterHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 1.5rem;
  color: var(--neutrals-extra-dark);

  h2 {
    ${H3}
    color: var(--neutrals-extra-dark);
  }
`;

export const FilterSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const FilterTitle = styled.h3`
  ${bodyLarge(600)}
  color: var(--neutrals-extra-dark);
`;

export const FilterList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: #4b4b4b;
  border-top: 1px solid #e0e0e0;
`;

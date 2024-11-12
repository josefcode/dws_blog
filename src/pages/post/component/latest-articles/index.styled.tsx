import styled from 'styled-components';
import { bodySmall, H2 } from '../../../../config/themes';

export const Countainer = styled.div`
  margin-top: 40px;
`;
export const Image = styled.img`
  width: 50px;
  height: 50px;
`;
export const List = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  padding-bottom: 50px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
export const DateInfo = styled.p`
  ${bodySmall}
  color: var(--neutral-medium);
`;
export const Divider = styled.hr`
  border: none;
  border-top: 1px solid var(--neutral-medium);
  margin-block: 40px;
`;
export const Title = styled.h2`
  ${H2}
  padding-bottom: 16px;
`;

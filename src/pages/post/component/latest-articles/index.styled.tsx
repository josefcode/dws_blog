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
  gap: 16px;
  padding-bottom: 50px;
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

import styled from 'styled-components';
import { bodySmall } from '../../../../config/themes';

export const AuthorContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: #fff;
  padding-block: 16px;
`;
export const Image = styled.img`
  width: 50px;
  height: 50px;
`;
export const AuthorName = styled.p`
  ${bodySmall}
`;
export const DateInfo = styled.p`
  ${bodySmall}
  color: var(--neutral-medium);
`;

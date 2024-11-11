import styled from 'styled-components';
import { bodyLarge } from '../../../../config/themes';

export const StyledParagraph = styled.p`
  ${bodyLarge(400)}
  margin-bottom: 1rem;
`;
export const Divider = styled.hr`
  border: none;
  border-top: 1px solid var(--neutral-medium);
  margin-block: 20px;
`;

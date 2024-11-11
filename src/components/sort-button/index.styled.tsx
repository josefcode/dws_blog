// src/components/Sort.styles.ts

import styled from 'styled-components';
import { bodyLarge } from '../../config/themes';

export const SortContainer = styled.div`
  display: flex;
  align-items: center;
`;

interface SortButtonProps {
  $isSelected: boolean;
}

// Styled button for the toggle button
export const SortButton = styled.button<SortButtonProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 110px;
  height: 32px;
  padding: 8px;
  ${bodyLarge(600)}
  color: ${(props) =>
    props.$isSelected
      ? 'var(--neutral-extra-light)'
      : 'var(--neutral-extra-dark)'};
  background-color: ${(props) =>
    props.$isSelected ? 'var(--accent1-medium)' : 'transparent'};
  border: none;
  border-radius: 42px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: var(--accent1-medium);
    color: var(--neutral-extra-light);
  }
`;

export const SortIcon = styled.span<SortButtonProps>`
  display: inline-flex;
  margin-left: 4px;

  svg {
    width: 16px;
    height: 16px;
    stroke: ${(props) =>
      props.$isSelected
        ? 'var(--neutral-extra-light)'
        : 'var(--accent1-medium)'};
    transition: stroke 0.3s;
  }
  &:hover {
    background-color: var(--accent1-medium);
    color: var(--neutral-extra-light);
  }
`;

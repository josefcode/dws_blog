import styled from 'styled-components';
import { bodyLarge } from '../../config/themes';
import { SortButtonProps } from './types';

export const SortContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const SortButton = styled.button<SortButtonProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: fit-content;
  white-space: nowrap;
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

    svg {
      stroke: var(--neutral-extra-light);
    }
  }

  @media (max-width: 768px) {
    font-weight: 400;
  }
`;

export const SortIcon = styled.span<SortButtonProps>`
  display: inline-flex;
  margin-left: 4px;
  svg {
    width: 15px;
    height: 15px;
    stroke: ${(props) =>
      props.$isSelected
        ? 'var(--neutral-extra-light)'
        : 'var(--accent1-medium)'};
    transition: stroke 0.3s;
  }

  @media (max-width: 768px) {
    font-size: 12px;
    line-height: auto;
    font-weight: bold;
  }
`;

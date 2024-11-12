import styled from 'styled-components';
import { bodyLarge, bodySmall } from '../../config/themes';

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const DropdownButtonStyled = styled.button`
  background-color: var(--neutral-lightest);
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  color: var(--secondary-medium);
  border: 1px solid var(--secondary-medium);
  border-radius: 42px;
  width: 100%;
  height: 32px;
  cursor: pointer;
  ${bodyLarge(600)}
  transition: background-color 0.3s;

  &:hover,
  &:focus {
    background-color: rgba(211, 20, 80, 0.05);
  }

  @media (max-width: 768px) {
    ${bodySmall}
  }
`;

export const ButtonContent = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 12px 12px 16px;
  gap: 2px;

  & > span {
    display: inline-flex;
    align-items: center;
  }

  & > span:last-child {
    margin-left: auto;
  }
`;
export const ClearButton = styled.span`
  cursor: pointer;
  font-size: 1rem;
  color: var(--secondary-medium);

  &:hover {
    color: var(--secondary-dark);
  }
`;

export const DropdownList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 314px;
  min-height: fit-content;
  list-style: none;
  background-color: var(--neutral-lightest);
  border-radius: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 8px 0;
  padding: 16px;
  z-index: 10;
`;

export const DropdownListItem = styled.li`
  cursor: pointer;
  margin-block-end: 8px;
  padding-block: 4px;
  font-size: 14px;
  line-height: 20px;
  color: var(--neutral-extra-dark);
`;

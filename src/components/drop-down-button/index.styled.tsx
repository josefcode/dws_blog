import styled from 'styled-components';

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
  font-size: 12px;
  line-height: auto;
  font-weight: bold;
  transition: background-color 0.3s;

  &:hover,
  &:focus {
    background-color: rgba(var(--secondary-light-rgba), 0.2);
  }
  svg {
    width: 12px;
    height: 12px;
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
  svg {
    width: 12px;
    height: 12px;
  }
`;

export const DropdownList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  min-width: fit-content;
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
  white-space: nowrap;
  margin-block-end: 8px;
  padding-block: 4px;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  color: var(--neutral-extra-dark);
`;

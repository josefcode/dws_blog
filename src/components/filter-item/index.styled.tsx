import styled from 'styled-components';

interface FilterItemContainerProps {
  isSelected: boolean;
}

export const FilterItemContainer = styled.li<FilterItemContainerProps>`
  font-size: 0.875rem;
  font-weight: 400;
  padding: 12px 8px;
  list-style: none;
  border-bottom: 1px solid var(--neutral-extra-light);
  cursor: pointer;
  display: inline-block;
  color: ${(props) =>
    props.isSelected ? 'var(--accent1-dark)' : 'var(--neutral-darkest)'};
  background-color: ${(props) =>
    props.isSelected ? 'rgba(var(--accent1-light-rgb), 0.05)' : 'transparent'};
  transition: color 0.3s ease, background-color 0.3s ease,
    border-color 0.3s ease;

  &:hover {
    color: var(--accent1-dark);
  }

  ${(props) =>
    props.isSelected &&
    `
    background-color: rgba(var(--accent1-dark-rgb), 5%);
    border-color: var(--accent1-dark);
    border-radius: 8px;
    border: 1px solid var(--accent1-dark);
  `}
`;

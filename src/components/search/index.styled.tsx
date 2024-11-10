import styled from 'styled-components';

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;
`;

export const StyledInput = styled.input<{ $isFocused: boolean }>`
  width: 100%;
  height: 40px;
  padding-block: 8px;
  padding-left: 16px;
  padding-right: 8px;
  font-size: 1rem;
  color: var(--neutral-extra-dark);
  background-color: var(--neutral-lightest);
  border: 1px solid
    ${(props) =>
      props.$isFocused
        ? 'var(--accent1-medium)'
        : 'var(--neutral-extra-light)'};
  border-radius: 50px;
  outline: none;
  transition: border-color 0.3s;

  &:hover {
    border-color: var(--accent1-medium);
  }
`;

export const SearchButtonWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  padding-right: 8px;
`;

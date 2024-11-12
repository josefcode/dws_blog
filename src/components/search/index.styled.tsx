import styled from 'styled-components';

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;
`;

export const StyledInput = styled.input<{ $isFocused: boolean }>`
  width: 100%;
  padding-block: 16px;
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

export const SuggestionsDropdown = styled.div`
  position: absolute;
  top: 128%;
  left: 0;
  right: 0;
  bottom: 0;
  width: calc(100% + 32px);
  height: fit-content;
  background-color: var(--neutral-lightest);
  z-index: 2;
  margin-left: -16px;
  overflow-x: hidden;
`;
export const SuggestionItem = styled.div`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: var(--neutral-extra-light);
  }
`;

export const SearchButtonWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  padding-right: 8px;
  display: inline-flex;
  align-items: center;
  .close_icon {
    margin-right: 10px;
    stroke: var(--neutral-dark);
  }
`;

export interface SearchProps {
  suggestions?: string[];
  placeholder?: string;
  onSuggestionSelect?: (suggestion: string) => void;
  onInputChange?: (value: string) => void;
  isFocused?: boolean;
}

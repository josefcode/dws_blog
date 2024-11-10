import { ButtonHTMLAttributes, ReactElement } from 'react';

type ButtonVariant = 'primary' | 'secondary';
export type IconPosition = 'left' | 'right';

export interface StyledButtonProps {
  $variant: ButtonVariant;
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  icon?: ReactElement;
  iconPosition?: IconPosition;
  children: React.ReactNode;
}

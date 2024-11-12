import { IconContainer, StyledButton } from './index.styled';
import { ButtonProps } from './types';

export const Button = ({
  variant = 'primary',
  children,
  icon,
  iconPosition = 'left',
  ...props
}: ButtonProps) => {
  return (
    <StyledButton $variant={variant} {...props}>
      {variant === 'search' && icon ? (
        icon
      ) : (
        <>
          {icon && iconPosition === 'left' && (
            <IconContainer position="left">{icon}</IconContainer>
          )}
          {children}
          {icon && iconPosition === 'right' && (
            <IconContainer position="right">{icon}</IconContainer>
          )}
        </>
      )}
    </StyledButton>
  );
};

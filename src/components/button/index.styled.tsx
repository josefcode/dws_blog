import React, { ButtonHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { bodyLarge } from '../../config/themes';
import { ButtonProps, IconPosition, StyledButtonProps } from './types';

const buttonBase = css`
  ${bodyLarge(600)};
  padding-block: 12px;
  border-radius: 50px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.3s, color 0.3s, border-color 0.3s;
`;

const primaryStyles = css`
  width: 100%;
  background-color: var(--secondary-medium);
  color: var(--neutral-lightest);
  border: none;

  &:hover {
    background-color: var(--secondary-dark);
  }
`;

const secondaryStyles = css`
  padding-inline: 16px;
  background-color: transparent;
  color: var(--secondary-medium);
  border: 1px solid var(--secondary-medium);

  &:hover {
    color: var(--secondary-dark);
    border-color: var(--secondary-dark);
  }
`;

export const IconContainer = styled.div<{ position: IconPosition }>`
  display: inline-flex;
  ${(props) =>
    props.position === 'left' ? 'margin-right: 8px;' : 'margin-left: 8px;'}
  svg {
    fill: currentColor;
  }
`;

export const StyledButton = styled.button<StyledButtonProps>`
  ${buttonBase};
  ${(props) =>
    props.$variant === 'secondary' ? secondaryStyles : primaryStyles};
`;

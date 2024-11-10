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

const searchStyles = css`
  background-color: var(--primary-dark);
  color: var(--neutral-lightest);
  border: none;
  width: 40px;
  height: 40px;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  transition: background-color 0.3s;

  &::after {
    content: '';
    position: absolute;
    top: -3px;
    left: -3px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 3px solid transparent;
    transition: all 0.3s ease;
  }

  &:hover::after {
    border-color: var(--neutral-extra-light);
  }
`;

export const IconContainer = styled.div<{ position: IconPosition }>`
  display: inline-flex;
  ${(props) =>
    props.position === 'left' ? 'margin-right: 8px;' : 'margin-left: 8px;'}
`;

export const StyledButton = styled.button<StyledButtonProps>`
  ${buttonBase};
  ${(props) =>
    props.$variant === 'secondary'
      ? secondaryStyles
      : props.$variant === 'search'
      ? searchStyles
      : primaryStyles};
`;

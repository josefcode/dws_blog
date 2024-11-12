import React from 'react';
import {
  BackgroundContainer,
  GradientBottomRight,
  GradientMiddleLeft,
  GradientTopRight,
} from './index.styled';

const BackgroundGrid = () => {
  return (
    <BackgroundContainer>
      <GradientTopRight />
      <GradientMiddleLeft />
      <GradientBottomRight />
    </BackgroundContainer>
  );
};

export default BackgroundGrid;

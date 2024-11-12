import styled from 'styled-components';

export const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 20px;
  overflow: hidden;
  z-index: -1;
  padding-inline: 14rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    padding-inline: 1rem;
  }
`;

export const GradientBox = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  filter: blur(50px);
`;

export const GradientTopRight = styled(GradientBox)`
  background: radial-gradient(
    circle,
    rgba(255, 183, 197, 0.7),
    rgba(255, 255, 255, 0)
  );
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  align-self: start;
  justify-self: end;
`;

export const GradientMiddleLeft = styled(GradientBox)`
  background: radial-gradient(
    circle,
    rgba(173, 216, 230, 0.8),
    rgba(255, 255, 255, 0)
  );
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  align-self: center;
  justify-self: start;
`;

export const GradientBottomRight = styled(GradientBox)`
  background: radial-gradient(
    circle,
    rgba(11, 14, 58, 0.3),
    rgba(255, 255, 255, 0)
  );
  grid-column: 2 / 3;
  grid-row: 3 / 4;
  align-self: end;
  justify-self: end;
`;

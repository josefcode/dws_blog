import styled from 'styled-components';
import { bodySmall, Caption, H3 } from '../../config/themes';

export const CardContainer = styled.div`
  min-width: 314px;
  min-height: fit-content;
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;

export const Image = styled.img`
  width: 100%;
  height: 196px;
  object-fit: cover;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
`;

export const InfoContainer = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const MetaData = styled.div`
  ${Caption};
  color: var(--neutral-dark);
`;

export const Title = styled.h3`
  ${H3};
  color: var(--neutral-darkest);
  margin: 0;
`;

export const Description = styled.p`
  ${bodySmall};
  color: var(--neutral-extra-dark);
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CategoryContainer = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

export const CategoryTag = styled.span`
  padding: 8px 12px;
  min-width: 84px;
  min-height: 32px;
  border-radius: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${Caption}
  color: var(--neutral-extra-dark);
  background-color: var(--neutral-lightest);
`;

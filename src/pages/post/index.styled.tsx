import styled from 'styled-components';

export const PostContainer = styled.main`
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 1.5rem;
  max-width: 1380px;
  margin: 0 auto;
  padding-block: 2rem;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding-inline: 1rem;
  }
`;
export const BackBtnWrapper = styled.div`
  padding-bottom: 25px;
`;

export const PostImage = styled.img`
  width: 100%;
  height: 400px;
  border-radius: 12px;
  margin-block: 20px;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

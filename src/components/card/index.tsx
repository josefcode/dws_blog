import React from 'react';
import {
  CardContainer,
  Image,
  InfoContainer,
  MetaData,
  Title,
  Description,
  CategoryContainer,
  CategoryTag,
} from './index.styled';
import { CardProps } from './types';

const Card = ({
  createdAt,
  author,
  title,
  description,
  categories,
}: CardProps) => {
  const formattedDate = new Date(createdAt).toLocaleDateString();

  return (
    <CardContainer>
      <Image src={author.profilePicture} alt={title} />
      <InfoContainer>
        <MetaData>
          {formattedDate} • {author.name}
        </MetaData>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <CategoryContainer>
          {categories.map((category, index) => (
            <CategoryTag key={index}>{category.name}</CategoryTag>
          ))}
        </CategoryContainer>
      </InfoContainer>
    </CardContainer>
  );
};

export default Card;

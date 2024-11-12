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
import { useNavigate } from 'react-router-dom';
import { IconPointFilled } from '@tabler/icons-react';

const Card = ({
  id,
  createdAt,
  thumbnail_url,
  author,
  title,
  content,
  categories,
}: CardProps) => {
  const formattedDate = new Date(createdAt).toLocaleDateString();
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/post/${id}`);
  };
  return (
    <CardContainer onClick={handleCardClick}>
      <Image src={thumbnail_url} alt={title} />
      <InfoContainer>
        <MetaData>
          {formattedDate} <IconPointFilled className="svg-dot" /> {author.name}
        </MetaData>
        <Title>{title}</Title>
        <Description>{content}</Description>
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

import { formatDate } from '../../../../utils/date-formater/date-formater';
import { AuthorContainer, AuthorName, DateInfo, Image } from './index.styled';

type AuthorProps = {
  author: { name: string; profilePicture: string };
  createdAt: string;
};

export const AuthorInfo = ({ author, createdAt }: AuthorProps) => {
  return (
    <AuthorContainer>
      <Image src={author.profilePicture} alt="Author image" />
      <div>
        <AuthorName>
          Written by: <strong>{author.name}</strong>
        </AuthorName>
        <DateInfo>{formatDate(createdAt)}</DateInfo>
      </div>
    </AuthorContainer>
  );
};

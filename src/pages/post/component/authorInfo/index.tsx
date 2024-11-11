import { AuthorContainer, AuthorName, DateInfo, Image } from './index.styled';

type AuthorProps = {
  author: { name: string; profilePicture: string };
  createdAt: string;
};

export const AuthorInfo = ({ author, createdAt }: AuthorProps) => {
  const date = new Date(createdAt);
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(date);
  return (
    <AuthorContainer>
      <Image src={author.profilePicture} alt="Author image" />
      <div>
        <AuthorName>
          Written by: <strong>{author.name}</strong>
        </AuthorName>
        <DateInfo>{formattedDate}</DateInfo>
      </div>
    </AuthorContainer>
  );
};

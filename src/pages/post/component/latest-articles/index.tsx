import { CardProps } from '../../../../components/card/types';
import Card from '../../../../components/card';
import { Countainer, Divider, List, Title } from './index.styled';

export const LatestArticles = ({ articles, postId }: any) => {
  if (!articles) {
    return null;
  }

  const latestArticles = articles
    .filter((post: CardProps) => post.id !== postId)
    .sort(
      (firstDetail: any, secondDetail: any) =>
        new Date(firstDetail.createdAt).getTime() -
        new Date(secondDetail.createdAt).getTime(),
    )
    .slice(0, 3);
  return (
    <Countainer>
      <Divider />
      <Title>Latest Articles</Title>
      <List>
        {latestArticles.map((postAr: CardProps) => (
          <li key={postAr.id}>
            <Card
              id={postAr.id}
              key={postAr.id}
              thumbnail_url={postAr.thumbnail_url}
              createdAt={postAr.createdAt}
              author={postAr.author}
              title={postAr.title}
              content={postAr.content}
              categories={postAr.categories}
            />
          </li>
        ))}
      </List>
    </Countainer>
  );
};

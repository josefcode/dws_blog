import { CardProps } from '../../../../components/card/types';
import Card from '../../../../components/card';
import { Countainer, Divider, List, Title } from './index.styled';

export const LatestArticles = ({ articles, postId }: any) => {
  if (!articles) {
    return null;
  }

  const latestArticles = articles
    .filter((p: CardProps) => p.id !== postId)
    .sort(
      (a: any, b: any) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
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

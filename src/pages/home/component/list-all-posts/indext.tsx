import Card from '../../../../components/card';
import { StyledList } from './index.styled';

export const ListAllPosts = ({ posts }: any) => {
  return (
    <section>
      <StyledList>
        {posts?.map((post: any) => (
          <li key={post.id}>
            <Card
              id={post.id}
              thumbnail_url={post.thumbnail_url}
              createdAt={post.createdAt}
              author={post.author}
              title={post.title}
              content={post.content}
              categories={post.categories}
            />
          </li>
        ))}
      </StyledList>
    </section>
  );
};

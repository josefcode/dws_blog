import React, { useEffect } from 'react';
import { IconChevronDown } from '@tabler/icons-react';
import { Button } from '../../components/button';
import DropdownButton from '../../components/drop-down-button';
import Sort from '../../components/sort-button';
import Card from '../../components/card';
import { useAppDispatch, useAppSelector } from '../../redux/store/store';
import { fetchPosts } from '../../redux/reducer/modules/list-posts/list-posts.reducer';

export const Home = () => {
  const dispatch = useAppDispatch();
  const {
    items: posts,
    status,
    error,
  } = useAppSelector((state) => state.posts);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPosts());
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }
  return (
    <>
      <div
        style={{
          padding: '16px',
          display: 'flex',
        }}
      >
        <DropdownButton
          label="Category"
          options={[
            'Category 1',
            'Category 2',
            'Category 3',
            'Category 4',
            'Category 5',
          ]}
        />
        <DropdownButton
          label="Category"
          options={[
            'Category 1',
            'Category 2',
            'Category 3',
            'Category 4',
            'Category 5',
          ]}
        />

        <Sort />
      </div>

      {posts.map((post) => {
        console.log(post);
      })}
      <ul style={{ paddingInline: '16px', display: 'grid', gap: 16 }}>
        {posts?.map((post: any) => (
          <Card
            key={post.id}
            createdAt={post.createdAt}
            author={post.author}
            title={post.title}
            description={post.content}
            categories={post.categories}
          />
        ))}
      </ul>
    </>
  );
};

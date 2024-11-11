import React, { useEffect } from 'react';
import DropdownButton from '../../components/drop-down-button';
import Sort from '../../components/sort-button';
import { useAppDispatch, useAppSelector } from '../../redux/store/store';
import { fetchPosts } from '../../redux/reducer/modules/list-posts/list-posts.reducer';
import { HomeBtnsWrapper, HomeContainer } from './index.styled';
import { ListAllPosts } from './component/list-all-posts/indext';

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
    <HomeContainer>
      <HomeBtnsWrapper>
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
      </HomeBtnsWrapper>
      <ListAllPosts posts={posts} />
    </HomeContainer>
  );
};

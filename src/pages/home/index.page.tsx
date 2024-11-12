import { useEffect } from 'react';
import DropdownButton from '../../components/drop-down-button';
import Sort from '../../components/sort-button';
import { useAppDispatch, useAppSelector } from '../../redux/store/store';
import { fetchPosts } from '../../redux/reducer/modules/list-posts/list-posts.reducer';
import { Header, HomeBtnsWrapper, HomeContainer, Root } from './index.styled';
import { ListAllPosts } from './component/list-all-posts/indext';
import FilterComponent from './component/filter';
import SortBtn from '../../components/sort-button';
import BackgroundGrid from '../../components/background';

export const Home = () => {
  const dispatch = useAppDispatch();
  const { items = [] } = useAppSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <Root>
      <BackgroundGrid />
      <Header>
        <h1>DWS blog</h1>
        <div className="sort-text">
          Sort by:
          <SortBtn />
        </div>
      </Header>
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
          label="Author"
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
      <HomeContainer>
        <FilterComponent />
        <ListAllPosts posts={items} />
      </HomeContainer>
    </Root>
  );
};
export default Home;

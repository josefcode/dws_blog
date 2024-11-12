import React, { useEffect } from 'react';
import DropdownButton from '../../components/drop-down-button';
import Sort from '../../components/sort-button';
import { useAppDispatch, useAppSelector } from '../../redux/store/store';
import { fetchPosts } from '../../redux/reducer/modules/list-posts/list-posts.reducer';
import { Header, HomeBtnsWrapper, HomeContainer, Root } from './index.styled';
import { ListAllPosts } from './component/list-all-posts/indext';
import FilterComponent from './component/filter';
import { SortButton } from '../../components/sort-button/index.styled';
import SortBtn from '../../components/sort-button';

export const Home = () => {
  const dispatch = useAppDispatch();
  // const {
  //   items,
  //   // status,
  //   // error,
  // } = useAppSelector((state) => state.posts);

  const mockPosts = [
    {
      id: '1',
      thumbnail_url: 'https://via.placeholder.com/150',
      createdAt: '2024-10-26T13:40:25.837Z',
      author: {
        name: 'Emily Davis',
        profilePicture: 'https://via.placeholder.com/50',
      },
      title: 'Tech Innovations in Healthcare',
      content:
        'An overview of the latest technological advancements in the healthcare sector, including AI, telemedicine, and wearable devices.',
      categories: [{ name: 'Technology' }, { name: 'Health' }],
    },
    {
      id: '2',
      thumbnail_url: 'https://via.placeholder.com/150',
      createdAt: '2024-10-20T09:15:30.123Z',
      author: {
        name: 'John Smith',
        profilePicture: 'https://via.placeholder.com/50',
      },
      title: 'Climate Change and Its Effects',
      content:
        'A deep dive into the effects of climate change on our planet and the actions we can take to mitigate its impact.',
      categories: [{ name: 'Science' }, { name: 'Environment' }],
    },
    {
      id: '3',
      thumbnail_url: 'https://via.placeholder.com/150',
      createdAt: '2024-09-18T16:22:10.456Z',
      author: {
        name: 'Alice Johnson',
        profilePicture: 'https://via.placeholder.com/50',
      },
      title: 'Healthy Eating Habits',
      content:
        'Tips and strategies to maintain a balanced diet and cultivate healthy eating habits for a better lifestyle.',
      categories: [{ name: 'Health' }, { name: 'Food' }],
    },
    {
      id: '4',
      thumbnail_url: 'https://via.placeholder.com/150',
      createdAt: '2024-08-05T11:32:54.789Z',
      author: {
        name: 'Michael Brown',
        profilePicture: 'https://via.placeholder.com/50',
      },
      title: 'Exploring the Wonders of Space',
      content:
        'An introduction to space exploration and recent discoveries about the universe.',
      categories: [{ name: 'Science' }, { name: 'Space' }],
    },
    {
      id: '5',
      thumbnail_url: 'https://via.placeholder.com/150',
      createdAt: '2024-07-22T14:05:12.345Z',
      author: {
        name: 'Sophia Martinez',
        profilePicture: 'https://via.placeholder.com/50',
      },
      title: 'Top Travel Destinations in 2024',
      content:
        'A guide to the top travel destinations around the world for 2024.',
      categories: [{ name: 'Travel' }],
    },
    {
      id: '6',
      thumbnail_url: 'https://via.placeholder.com/150',
      createdAt: '2024-06-30T18:50:45.678Z',
      author: {
        name: 'William Garcia',
        profilePicture: 'https://via.placeholder.com/50',
      },
      title: 'The Rise of Remote Work',
      content:
        'An exploration of the remote work trend, its benefits, challenges, and future potential.',
      categories: [{ name: 'Business' }, { name: 'Technology' }],
    },
  ];

  // useEffect(() => {
  //   dispatch(fetchPosts());
  // }, [dispatch]);

  // console.log(items);
  // if (status === 'loading') {
  //   return <div>Loading...</div>;
  // }

  // if (status === 'failed') {
  //   return <div>Error: {error}</div>;
  // }
  return (
    <Root>
      <Header>
        <h1>DWS blog</h1>
        <div className="sort-text">
          Sort by:
          <SortBtn />
        </div>
      </Header>
      <HomeContainer>
        <FilterComponent />
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
        <ListAllPosts posts={mockPosts} />
      </HomeContainer>
    </Root>
  );
};
export default Home;

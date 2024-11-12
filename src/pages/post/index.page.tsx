import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchPostById } from '../../redux/reducer/modules/selected-post/selected-post.reducer';
import { fetchPosts } from '../../redux/reducer/modules/list-posts/list-posts.reducer';
import { useAppDispatch, useAppSelector } from '../../redux/store/store';
import { IconArrowLeft } from '@tabler/icons-react';
import { Button } from '../../components/button';
import { AuthorInfo } from './component/author-Info';
import { SplitText } from './component/split-text';
import { LatestArticles } from './component/latest-articles';
import { BackBtnWrapper, PostContainer, PostImage } from './index.styled';
import BackgroundGrid from '../../components/background';

const PostPage = () => {
  const { postId } = useParams<{ postId: string }>();
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const { item: post = [] } = useAppSelector((state) => state.post);

  const { items: posts = [] } = useAppSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPostById(postId));

    dispatch(fetchPosts());
  }, [postId, dispatch]);

  return (
    <PostContainer>
      <BackgroundGrid />
      <BackBtnWrapper>
        <Button
          icon={<IconArrowLeft />}
          variant="secondary"
          onClick={() => navigate(-1)}
        >
          Back
        </Button>
      </BackBtnWrapper>
      <div>
        <h1>{post.title}</h1>
        <AuthorInfo author={post.author} createdAt={post.createdAt} />
        <PostImage src={post.thumbnail_url} alt={post.title} />
        <SplitText content={post.content} />
        <LatestArticles articles={posts} postId={postId} />
      </div>
    </PostContainer>
  );
};

export default PostPage;

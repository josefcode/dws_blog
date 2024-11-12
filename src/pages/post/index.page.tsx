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
import { BackBtnWrapper, PostContainer } from './index.styled';

const PostPage = () => {
  const { postId } = useParams<{ postId: string }>();
  const navigate = useNavigate();

  //   const dispatch = useAppDispatch();

  //   const {
  //     item: post,
  //     status: postStatus,
  //     error: postError,
  //   } = useAppSelector((state) => state.post);

  //   const { items: allPosts, status: postsStatus } = useAppSelector(
  //     (state) => state.posts,
  //   );

  //   useEffect(() => {
  //     if (postId) {
  //       dispatch(fetchPostById(postId));
  //     }
  //     if (postsStatus === 'idle') {
  //       dispatch(fetchPosts());
  //     }
  //   }, [postId, dispatch, postsStatus]);

  //   if (postStatus === 'loading' || postsStatus === 'loading') {
  //     return <div>Loading...</div>;
  //   }

  //   if (postStatus === 'failed') {
  //     return <div>Error: {postError}</div>;
  //   }

  //   if (!post) {
  //     return <div>Post not found.</div>;
  //   }

  return (
    <PostContainer>
      <BackBtnWrapper>
        <Button
          icon={<IconArrowLeft />}
          variant="secondary"
          onClick={() => navigate(-1)}
        >
          Back
        </Button>
      </BackBtnWrapper>
      {/* <h1>{post.title}</h1>
      <AuthorInfo author={post.author} createdAt={post.createdAt} />
      <img
        src={post.thumbnail_url}
        alt={post.title}
        style={{ width: '100%', borderRadius: '12px', marginBlock: '20px' }}
      />
      <SplitText content={post.content} />
      <LatestArticles articles={allPosts} postId={postId} /> */}
    </PostContainer>
  );
};

export default PostPage;

import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import postsReducer from '../reducer/modules/list-posts/list-posts.reducer';
import postReducer from '../reducer/modules/selected-post/selected-post.reducer';
import authorReducer from '../reducer/modules/list-authors/list-authors.reducer';
import categoryReducer from '../reducer/modules/list-categories/list-authors.reducer';

export const storeFactory = () => {
  return configureStore({
    reducer: {
      posts: postsReducer,
      post: postReducer,
      authors: authorReducer,
      categories: categoryReducer,
    },
  });
};

export const store = storeFactory();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;

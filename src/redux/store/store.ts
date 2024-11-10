// Stryker disable all
import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import postsReducer from '../reducer/modules/list-posts/list-posts.reducer';

export const storeFactory = () => {
  return configureStore({
    // preloadedState: getPreLoadedStateOnLocalStore(preloadedState),
    reducer: {
      posts: postsReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  });
};

export const store = storeFactory();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;

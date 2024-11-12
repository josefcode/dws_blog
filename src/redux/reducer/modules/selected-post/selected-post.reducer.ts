import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface Post {
  id: string;
  title: string;
  content: string;
  thumbnail_url: string;
  authorId: string;
  createdAt: string;
  updatedAt: string;
  categories: { id: string; name: string }[];
  author: { id: string; name: string; profilePicture: string };
}

interface PostState {
  item: Post | null;
  loading: boolean;
  error: string | null;
}

const initialState: PostState = {
  item: null,
  loading: false,
  error: null,
};

export const fetchPostById = createAsyncThunk(
  'post/fetchPostById',
  async (postId: string) => {
    const response = await axios.get(
      `https://tech-test-backend.dwsbrazil.io/posts/${postId}`,
    );
    return response.data;
  },
);

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPostById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPostById.fulfilled, (state, action) => {
        state.loading = false;
        state.item = action.payload;
      })
      .addCase(fetchPostById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch post';
      });
  },
});

export default postSlice.reducer;

import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

export interface Author {
  name: string;
  profilePicture: string;
}

export interface Category {
  name: string;
}

export interface Post {
  id: string;
  thumbnail_url: string;
  createdAt: string;
  author: Author;
  title: string;
  content: string;
  categories: Category[];
}

interface PostState {
  posts: Post[];
  filteredPosts: Post[];
  loading: boolean;
  error: string | null;
  selectedCategory: string | null;
}

const initialState: PostState = {
  posts: [],
  filteredPosts: [],
  loading: false,
  error: null,
  selectedCategory: null,
};

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        'https://tech-test-backend.dwsbrazil.io/posts/',
      );
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setSelectedCategory(state, action: PayloadAction<string | null>) {
      state.selectedCategory = action.payload;
      if (action.payload) {
        state.filteredPosts = state.posts.filter((post) =>
          post.categories.some((category) => category.name === action.payload),
        );
      } else {
        state.filteredPosts = state.posts;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action: PayloadAction<Post[]>) => {
        state.loading = false;
        state.posts = action.payload;
        state.filteredPosts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setSelectedCategory } = postSlice.actions;

export default postSlice.reducer;

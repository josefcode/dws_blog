import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

interface Author {
  id: string;
  name: string;
  profilePicture: string;
  createdAt: string;
  updatedAt: string;
}

interface AuthorState {
  authors: Author[];
  loading: boolean;
  error: string | null;
}

const initialState: AuthorState = {
  authors: [],
  loading: false,
  error: null,
};

export const fetchAuthors = createAsyncThunk(
  'authors/fetchAuthors',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        'https://tech-test-backend.dwsbrazil.io/authors/',
      );
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);

const authorSlice = createSlice({
  name: 'authors',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAuthors.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchAuthors.fulfilled,
        (state, action: PayloadAction<Author[]>) => {
          state.loading = false;
          state.authors = action.payload;
        },
      )
      .addCase(fetchAuthors.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default authorSlice.reducer;

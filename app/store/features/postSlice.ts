import { IPost } from '@app/lib/definitions';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { client } from '@sanity/lib/client';

interface PostState {
  posts: IPost[]
  error: any,
  pending: boolean
}

const initialState:PostState = {
  posts: [],
  error: null,
  pending: false,
};

export const fetchPosts = createAsyncThunk('post/fetchPosts', async () => {
  const data = await client.fetch('*[_type == "post"]| order(publishedAt desc){ title, slug, author->, mainImage, publishedAt, body }');
  return data;
});

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      state.pending = true;
    });
    builder.addCase(fetchPosts.fulfilled, (state, action: PayloadAction<IPost[]>) => {
      state.pending = false;
      state.posts = action.payload;
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.pending = false;
      state.error = action.payload;
    });
  },
});

export default postSlice.reducer;

import { groq } from 'next-sanity';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IPost } from '@app/lib/definitions';
import { client } from '@sanity/lib/client';
import { POST_LIST_PAGINATION_LIMIT } from '@app/lib/constants';

interface PostState {
  posts: IPost[]
  error: any,
  pending: boolean
  total: number,
  page: number,
}

const initialState:PostState = {
  posts: [],
  error: null,
  pending: false,
  total: 0,
  page: 1,
};

export const fetchPosts = createAsyncThunk('post/fetchPosts', async ({
  page,
} : {
  page: number,
}) => {
  const start = (page - 1) * POST_LIST_PAGINATION_LIMIT;
  const end = start + POST_LIST_PAGINATION_LIMIT;

  const count = await client.fetch(groq`count(*[_type == "post"])`);
  const data = await client.fetch(groq`
    *[_type == "post"]| order(publishedAt desc)[$start...$end]{
      title, slug, author->, mainImage, publishedAt
    }
  `, {
    start,
    end,
  });

  const total = count / POST_LIST_PAGINATION_LIMIT;

  return {
    data,
    total,
    page,
  };
});

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      state.pending = true;
    });
    builder.addCase(fetchPosts.fulfilled, (
      state,
      action: PayloadAction<{
        data: IPost[],
        total: number,
        page: number
      }>,
    ) => {
      state.pending = false;
      state.posts = action.payload.data;
      state.total = action.payload.total;
      state.page = action.payload.page;
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.pending = false;
      state.error = action.payload;
    });
  },
});

export default postSlice.reducer;

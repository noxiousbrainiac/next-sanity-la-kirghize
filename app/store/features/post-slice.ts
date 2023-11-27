import { groq } from 'next-sanity';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IPost } from '@app/lib/definitions';
import { client } from '@sanity/lib/client';
import { POST_LIST_PAGINATION_LIMIT } from '@app/lib/constants';

interface PostState {
  posts: IPost[]
  currentPost: IPost | any,
  total: number,
  page: number,
}

const initialState:PostState = {
  posts: [],
  currentPost: null,
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
      _id, title, slug, author->, mainImage, publishedAt
    }
  `, {
    start,
    end,
  }, {
    next: {
      revalidate: 3600,
    },
  });

  const total = count / POST_LIST_PAGINATION_LIMIT;

  return {
    data,
    total,
    page,
  };
});

export const fetchPost = createAsyncThunk('post/fetchPost', async ({
  slug,
} : {
  slug: string,
}) => {
  const data = await client.fetch(groq`
    *[_type == "post" && slug.current == $slug][0] {
      _id, title, slug, author->, mainImage, publishedAt, body
    }
  `, { slug }, {
    next: {
      revalidate: 3600,
    },
  });

  return data;
});

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchPosts.fulfilled,
      (
        state,
        action: PayloadAction<{
          data: IPost[],
          total: number,
          page: number
        }>,
      ) => {
        state.posts = action.payload.data;
        state.total = action.payload.total;
        state.page = action.payload.page;
      },
    );
    builder.addCase(
      fetchPost.fulfilled,
      (
        state,
        action: PayloadAction<IPost>,
      ) => {
        state.currentPost = action.payload;
      },
    );
  },
});

export default postSlice.reducer;

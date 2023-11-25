import React from 'react';
import { fetchPosts } from '@app/store/features/post-slice';
import { store } from '@app/store';
import PostsContainer from '@app/ui/containers/posts-container';

async function Posts({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
  const page = typeof searchParams.page === 'string' ? Number(searchParams.page) : 1;

  await store.dispatch(fetchPosts({ page }));

  return <PostsContainer />;
}

export default Posts;

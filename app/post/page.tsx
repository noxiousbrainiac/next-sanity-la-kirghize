import React from 'react';
import { fetchPosts } from '@app/lib/store/features/postSlice';
import { store } from '@app/lib/store';
import PostsContainer from '@app/ui/containers/posts-container';

async function getData() {
  await store.dispatch(fetchPosts());
}

async function Posts() {
  await getData();

  return <PostsContainer />;
}

export default Posts;

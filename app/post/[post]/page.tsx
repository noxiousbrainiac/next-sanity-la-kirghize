import React from 'react';
import PostContainer from '@app/ui/containers/post-container';
import { fetchPost } from '@app/store/features/post-slice';
import { store } from '@app/store';

async function Post({ params } : { params: { [key: string]: string } }) {
  const { post: slug } = params;

  await store.dispatch(fetchPost({ slug }));

  return <PostContainer />;
}

export default Post;

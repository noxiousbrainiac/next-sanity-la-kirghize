import React from 'react';
import dynamic from 'next/dynamic';
import { store } from '@app/store';

const PostList = dynamic(() => import('@app/ui/lists/post-list'));

function PostsContainer() {
  const {
    posts,
    total,
    page,
  } = store.getState().post;

  return (
    <div className="mx-auto px-4 max-w-screen-xl">
      <PostList
        posts={posts}
        total={total}
        page={page}
      />
    </div>
  );
}

export default PostsContainer;

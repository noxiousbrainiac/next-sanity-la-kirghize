import React from 'react';
import dynamic from 'next/dynamic';
import CustomBreadcrumbs from '@app/ui/custom-breadcrumbs/custom-breadcrumbs';
import { store } from '@app/lib/store';

const PostList = dynamic(() => import('@app/ui/lists/post-list'));

function PostsContainer() {
  const { posts } = store.getState().post;

  return (
    <div className="mx-auto px-4 max-w-screen-xl">
      <CustomBreadcrumbs />
      <PostList posts={posts} />
    </div>
  );
}

export default PostsContainer;

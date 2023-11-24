import React from 'react';
import dynamic from 'next/dynamic';
import { IPost } from '@app/lib/definitions';

const PostCard = dynamic(() => import('@app/ui/post-card/post-card'));

function PostList({ posts }: { posts: IPost[] }) {
  return (
    <div className="gap-2 grid grid-cols-2 md:grid-cols-3">
      {posts.map((post) => (
        <PostCard
          key={`${post.id}`}
          post={post}
        />
      ))}
    </div>
  );
}

export default PostList;
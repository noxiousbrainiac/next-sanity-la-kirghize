'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import { Pagination } from '@nextui-org/react';
import { IPost } from '@app/lib/definitions';
import { POST_LIST_PAGINATION_LIMIT } from '@app/lib/constants';

const PostCard = dynamic(() => import('@app/ui/cards/post-card'));

function PostList({
  posts,
  total,
  page,
} : {
  posts: IPost[],
  total: number,
  page: number,
}) {
  const router = useRouter();

  return (
    <>
      <div className="gap-2 grid mobile:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <PostCard
            key={`${post.id}`}
            post={post}
          />
        ))}
      </div>
      <div className="flex justify-center">
        <Pagination
          isCompact
          showControls
          showShadow
          total={total}
          initialPage={page}
          isDisabled={total <= POST_LIST_PAGINATION_LIMIT}
          className="mt-6"
          onChange={(current) => router.push(`post/?page=${Math.floor(current)}`)}
        />
      </div>
    </>
  );
}

export default PostList;

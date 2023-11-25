import { POST_LIST_PAGINATION_LIMIT } from '@app/lib/constants';
import { Card, Skeleton } from '@nextui-org/react';
import React from 'react';

function PostLoading() {
  const items = [];

  for (let i = 0; i < POST_LIST_PAGINATION_LIMIT; i++) {
    items.push(i);
  }

  return (
    <div className="mx-auto px-4 max-w-screen-xl">
      <div className="gap-2 grid mobile:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <Card
            radius="lg"
            key={`skeleton-item-${item}`}
            className="py-4 px-3"
          >
            <Skeleton className="rounded-sm mb-1 w-4/5 h-[18px]" />
            <Skeleton className="rounded-sm mb-1 w-5/5 h-[36px]" />
            <Skeleton className="rounded-sm mb-4 w-3/5 h-[18px]" />
            <Skeleton className="rounded-xl h-[170px] mobile:h-[220px] tablet:h-[270px]" />
          </Card>
        ))}
      </div>
    </div>
  );
}

export default PostLoading;

import React from 'react';
import { Skeleton } from '@nextui-org/react';

function PostLoading() {
  return (
    <>
      <div className="mx-auto mb-6 px-4 max-w-screen-xl">
        <div className="flex flex-col tablet:flex-row gap-6 tablet:gap-12">
          <div className="overflow-hidden rounded-md relative w-[100%] h-[250px] mobile:h-[400px] tablet:w-[50%]">
            <Skeleton className="rounded-sm h-full w-full" />
          </div>
          <div className="flex flex-col justify-between rounded-md w-[100%] tablet:w-[50%]">
            <Skeleton className="rounded-sm w-1/3 h-[20px] mb-2" />
            <Skeleton className="rounded-sm w-full flex-grow mb-2" />
            <Skeleton className="rounded-full w-20 h-20" />
          </div>
        </div>
      </div>
      <div className="mx-auto px-4 max-w-screen-md">
        <Skeleton className="rounded-sm w-3/4 h-[20px] mb-2" />
        <Skeleton className="rounded-sm w-full h-[20px] mb-2" />
        <Skeleton className="rounded-sm w-1/2 h-[20px] mb-2" />
      </div>
    </>

  );
}

export default PostLoading;

import { store } from '@app/store';
import React from 'react';
import { User } from '@nextui-org/react';
import SanityImage from '@app/ui/sanity-image/sanity-image';
import RichText from '@app/ui/rich-text/rich-text';
import { IPost } from '@app/lib/definitions';
import { formatDate } from '@app/lib/helpers';
import { urlForImage } from '@sanity/lib/image';

function PostContainer() {
  const {
    title,
    mainImage,
    body,
    publishedAt,
    author: {
      name,
      image,
      role,
    },
  }: IPost = store.getState().post.currentPost;

  const date = formatDate(publishedAt);
  const avatar = urlForImage(image)
    .format('webp')
    .url();

  return (
    <>
      <div className="mx-auto px-4 mb-6 mobile:mb-12 max-w-screen-xl">
        <div className="flex flex-col tablet:flex-row gap-6 tablet:gap-12">
          <div className="overflow-hidden rounded-md relative w-[100%] h-[250px] mobile:h-[400px] tablet:w-[50%]">
            <SanityImage
              fill
              priority
              image={mainImage}
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="flex flex-col items-start justify-between rounded-md w-[100%] tablet:w-[50%]">
            <small className="text-large text-default-500">
              {date}
            </small>
            <h1 className="flex-grow text-3xl mobile:text-4xl tablet:text-5xl my-3 font-bold">
              {title}
            </h1>
            <User
              name={name}
              description={role}
              avatarProps={{ src: avatar, className: 'w-20 h-20 text-large' }}
            />
          </div>
        </div>
      </div>
      <div className="mx-auto px-4 max-w-screen-md">
        <RichText value={body} />
      </div>
    </>
  );
}

export default PostContainer;

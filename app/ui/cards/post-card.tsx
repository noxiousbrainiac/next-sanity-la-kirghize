'use client';

import React from 'react';
import Link from 'next/link';
import {
  Card,
  CardHeader,
  CardBody,
} from '@nextui-org/react';
import { IPost } from '@app/lib/definitions';
import SanityImage from '@app/ui/sanity-image/sanity-image';
import { formatDate } from '@app/lib/helpers';

function PostCard({ post }: { post: IPost }) {
  const {
    title,
    author,
    mainImage,
    publishedAt,
    slug: { current },
  } = post;

  const date = formatDate(publishedAt);

  return (
    <Card
      as={Link}
      className="py-4"
      isPressable
      href={`/post/${current}`}
      target="_blank"
    >
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start flex-grow">
        <small className="text-default-500">
          {date}
        </small>
        <h4 className="font-bold text-medium md:text-large flex-grow">
          {title}
        </h4>
        <small className="ext-tiny">
          {author.name}
        </small>
      </CardHeader>
      <CardBody className="overflow-visible py-2 flex-none">
        <div className="overflow-hidden rounded-xl relative h-[220px] mobile:h-[250px] tablet:h-[270px]">
          <SanityImage
            fill
            image={mainImage}
            objectFit="cover"
          />
        </div>
      </CardBody>
    </Card>
  );
}

export default PostCard;

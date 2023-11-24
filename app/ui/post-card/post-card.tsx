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

function PostCard({ post }: { post: IPost }) {
  const {
    title,
    author,
    mainImage,
    publishedAt,
    slug: { current },
  } = post;

  const dateObject = new Date(publishedAt);
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  const date:string = dateObject.toLocaleDateString('en-US', options);

  return (
    <Card
      as={Link}
      className="py-4"
      isPressable
      href={`/post/${current}`}
      target="_blank"
    >
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h5 className="font-bold text-medium md:text-large">
          {title}
        </h5>
        <small className="text-default-500">
          {date}
        </small>
        <p className="text-tiny uppercase font-bold">
          {author.name}
        </p>
      </CardHeader>
      <CardBody className="relative overflow-visible py-2">
        <SanityImage image={mainImage} />
      </CardBody>
    </Card>
  );
}

export default PostCard;

'use client';

import React from 'react';
import NextImage from 'next/image';
import { urlForImage } from '@sanity/lib/image';

interface ImageProps {
  image: any,
  className?: string,
  fill?: boolean,
  width?: number,
  height?: number
  priority?: boolean
  sizes?: string
}

function SanityImage({ image, ...rest } : ImageProps) {
  const src = urlForImage(image)
    .format('webp')
    .url();

  return (
    <NextImage
      src={src}
      alt={image.alt}
      {...rest}
    />
  );
}

export default SanityImage;

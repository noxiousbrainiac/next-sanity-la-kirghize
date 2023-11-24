import React from 'react';
import NextImage from 'next/image';
import { Image } from '@nextui-org/react';
import { urlForImage } from '@sanity/lib/image';

interface ImageProps {
  image: any
}

function SanityImage({ image, ...rest } : ImageProps) {
  const src = urlForImage(image)
    .format('webp')
    .url();

  return (
    <Image
      as={NextImage}
      width={500}
      height={500}
      src={src}
      alt={image.alt}
      {...rest}
    />
  );
}

export default SanityImage;

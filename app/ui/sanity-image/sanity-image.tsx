import React from 'react';
import NextImage from 'next/image';
import { urlForImage } from '@sanity/lib/image';

interface ImageProps {
  image: any
  className: string
}

function SanityImage({ image, className, ...rest } : ImageProps) {
  const src = urlForImage(image)
    .format('webp')
    .url();

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <NextImage
        fill
        src={src}
        alt={image.alt}
        className="object-cover"
        {...rest}
      />
    </div>
  );
}

export default SanityImage;

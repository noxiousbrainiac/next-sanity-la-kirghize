'use client';

import React from 'react';
import { PortableText, PortableTextComponents } from '@portabletext/react';
import SanityImage from '@app/ui/sanity-image/sanity-image';

const components: PortableTextComponents = {
  block: {
    h1: ({ children }) => (
      <h1 className="text-2xl">{children}</h1>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-purple-500">{children}</blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="mt-xl">{children}</ul>,
  },
  types: {
    image: ({ value }) => (
      <SanityImage
        image={value}
        width={700}
        height={400}
        className="rounded-md my-4"
      />
    ),
  },
};

function RichText({ value }: { value: any }) {
  return (
    <PortableText
      value={value}
      components={components}
    />
  );
}

export default RichText;

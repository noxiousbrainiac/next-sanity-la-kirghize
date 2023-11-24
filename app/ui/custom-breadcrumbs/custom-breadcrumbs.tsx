'use client';

import React from 'react';
import { Breadcrumbs, BreadcrumbItem } from '@nextui-org/react';
import { usePathname } from 'next/navigation';

function CustomBreadcrumbs() {
  const paths = usePathname();
  const pathNames = paths.split('/').filter((path) => path);

  return (
    <Breadcrumbs
      hideSeparator
      className="py-2"
      classNames={{
        list: 'gap-2',
      }}
      itemClasses={{
        item: [
          'px-2 py-0.5 border-small border-default-400 rounded-small',
          'data-[current=true]:border-default-800 data-[current=true]:bg-foreground data-[current=true]:text-background transition-colors',
          'data-[disabled=true]:border-default-400 data-[disabled=true]:bg-default-100',
        ],
      }}
    >
      <BreadcrumbItem href="/">Home</BreadcrumbItem>
      {pathNames.map((path, index) => {
        const href = `/${pathNames.slice(0, index + 1).join('/')}`;
        const pathTitle = path[0].toUpperCase() + path.slice(1, path.length);

        return <BreadcrumbItem key={path} href={href}>{pathTitle}</BreadcrumbItem>;
      })}
    </Breadcrumbs>
  );
}

export default CustomBreadcrumbs;

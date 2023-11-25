import React from 'react';
import { Breadcrumbs, BreadcrumbItem } from '@nextui-org/react';

function PostContainer() {
  return (
    <div>
      <Breadcrumbs>
        <BreadcrumbItem href="/docs/components/button">Button</BreadcrumbItem>
      </Breadcrumbs>
    </div>
  );
}

export default PostContainer;

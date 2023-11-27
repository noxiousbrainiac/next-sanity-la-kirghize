import React from 'react';
import CustomBreadcrumbs from '@app/ui/custom-breadcrumbs/custom-breadcrumbs';
import Header from '@app/ui/app-header/app-header';

function PostLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <CustomBreadcrumbs />
      {children}
    </>
  );
}

export default PostLayout;

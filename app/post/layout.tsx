import React from 'react';
import Header from '@app/ui/header/header';
import CustomBreadcrumbs from '@app/ui/custom-breadcrumbs/custom-breadcrumbs';

function PostLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <CustomBreadcrumbs />
      <main>
        {children}
      </main>
    </>
  );
}

export default PostLayout;

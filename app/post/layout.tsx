import Header from '@app/ui/header/header';
import React from 'react';

function PostLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
    </>
  );
}

export default PostLayout;

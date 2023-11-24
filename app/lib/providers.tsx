'use client';

import React from 'react';
import { Provider } from 'react-redux';
import { NextUIProvider } from '@nextui-org/react';
import { store } from '@app/lib/store';
import { useRouter } from 'next/navigation';

function Providers({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <Provider store={store}>
      <NextUIProvider navigate={router.push}>
        { children }
      </NextUIProvider>
    </Provider>
  );
}

export default Providers;

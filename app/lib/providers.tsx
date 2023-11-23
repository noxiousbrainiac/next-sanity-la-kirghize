'use client';

import React from 'react';
import { Provider } from 'react-redux';
import { NextUIProvider } from '@nextui-org/react';
import { store } from '@app/lib/store';

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <NextUIProvider>
        { children }
      </NextUIProvider>
    </Provider>
  );
}

export default Providers;

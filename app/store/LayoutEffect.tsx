'use client';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { MOBILE_RESOLUTION, TABLET_RESOLUTION } from '@app/lib/constants';
import {
  setDesktopResolution,
  setMobileResolution,
  setTabletResolution,
} from '@app/store/features/layoutSlice';

function LayoutEffect() {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleOnResize = () => {
      const { innerWidth } = window;

      if (innerWidth <= MOBILE_RESOLUTION) {
        dispatch(setMobileResolution());
      } else if (innerWidth > MOBILE_RESOLUTION && innerWidth <= TABLET_RESOLUTION) {
        dispatch(setTabletResolution());
      } else {
        dispatch(setDesktopResolution());
      }
    };

    handleOnResize();
    window.addEventListener('resize', handleOnResize);

    return () => window.removeEventListener('resize', handleOnResize);
  }, [dispatch]);

  return null;
}

export default LayoutEffect;

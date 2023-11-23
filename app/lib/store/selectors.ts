import { RootState } from '.';

export const selectIsMobile = (state: RootState) => state.layout.mobile;

export const selectIsTablet = (state: RootState) => state.layout.tablet;

export const selectIsDesktop = (state: RootState) => state.layout.desktop;

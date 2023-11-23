import { createSlice } from '@reduxjs/toolkit';

interface LayoutState {
  mobile: boolean,
  tablet: boolean,
  desktop: boolean,
}

const initialState:LayoutState = {
  mobile: false,
  tablet: false,
  desktop: false,
};

const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    setMobileResolution: (state) => {
      state.mobile = true;
      state.tablet = false;
      state.desktop = false;
    },
    setTabletResolution: (state) => {
      state.mobile = false;
      state.tablet = true;
      state.desktop = false;
    },
    setDesktopResolution: (state) => {
      state.mobile = false;
      state.tablet = false;
      state.desktop = true;
    },
  },
});

export const {
  setMobileResolution,
  setTabletResolution,
  setDesktopResolution,
} = layoutSlice.actions;

export default layoutSlice.reducer;

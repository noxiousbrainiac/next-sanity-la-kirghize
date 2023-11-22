import {
  configureStore,
  Action,
  ThunkAction,
} from '@reduxjs/toolkit';
import postReducer from '@app/lib/store/features/postSlice';

export const store = configureStore({
  reducer: {
    post: postReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
ReturnType,
RootState,
unknown,
Action<string>
>;

export const useAppDispatch = store.dispatch;

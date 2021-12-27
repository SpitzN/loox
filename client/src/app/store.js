import { configureStore } from '@reduxjs/toolkit';
import { looxAPI } from '../features/looxAPI';
import looxReducer from '../features/looxSlice';

export const store = configureStore({
  reducer: {
    loox: looxReducer,
    [looxAPI.reducerPath]: looxAPI.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(looxAPI.middleware),
});

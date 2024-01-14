import { configureStore } from '@reduxjs/toolkit';
import { itemApi } from './services/api-service';

export const store = configureStore({
  reducer: {
    [itemApi.reducerPath]: itemApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(itemApi.middleware);
  },
});

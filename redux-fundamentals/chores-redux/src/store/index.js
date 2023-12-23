import { configureStore } from '@reduxjs/toolkit';
import { humanSlice } from './humanSlice';
import { tasksSlice } from './tasksSlice';

export const store = configureStore({
  reducer: {
    tasks: tasksSlice.reducer,
    humans: humanSlice.reducer
  }
});

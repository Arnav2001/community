// store.js
import { configureStore } from '@reduxjs/toolkit';
import careersReducer from './careersSlice';

const store = configureStore({
  reducer: {
    careers: careersReducer
  }
});

export default store;

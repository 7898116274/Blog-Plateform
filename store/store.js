import { configureStore } from '@reduxjs/toolkit';
import blogsSlice from './blogSlice';

// Create a Redux store with combined reducers
const store = configureStore({
  reducer: {
    blogs: blogsSlice, // Include the blogsSlice reducer
    // Add more reducers if needed, e.g., form: formReducer,
  },
});

export default store;

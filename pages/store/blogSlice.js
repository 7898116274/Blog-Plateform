// blogSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define an asynchronous thunk to fetch blogs from the API
export const fetchBlogs = createAsyncThunk('blogs/fetch', async () => {
  try {
    // Fetch blogs from the API
    const res = await fetch('https://my-json-server.typicode.com/7898116274/data/user');
    const data = await res.json();
    return data;
  } catch (error) {
    // Handle errors if the API request fails
    console.error('Error fetching blogs:', error);
    throw error;
  }
});

// Define possible statuses for the Redux state
export const STATUSES = Object.freeze({
  IDLE: 'idle',       // Initial state
  ERROR: 'error',     // Error state
  LOADING: 'loading', // Loading state
});

// Create a Redux slice for managing blogs state
const blogsSlice = createSlice({
  name: 'blogs',
  initialState: {
    data: [],           // Array to store blogs data
    status: STATUSES.IDLE, // Initial status
  },
  reducers: {},
  extraReducers: (builder) => {
    // Handle actions related to fetching blogs
    builder
      .addCase(fetchBlogs.pending, (state, action) => {
        // Set loading status when the fetchBlogs request is pending
        state.status = STATUSES.LOADING;
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        // Set blogs data and idle status when the fetchBlogs request is fulfilled
        state.data = action.payload;
        state.status = STATUSES.IDLE;
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        // Set error status when the fetchBlogs request is rejected
        state.status = STATUSES.ERROR;
      });
  },
});

// Export Redux actions and reducer
export const { setblogs, setStatus } = blogsSlice.actions;
export default blogsSlice.reducer;

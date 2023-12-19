// formSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const STATUSES = Object.freeze({
  IDLE: 'idle',
  ERROR: 'error',
  LOADING: 'loading',
});

const formSlice = createSlice({
  name: 'forms',
  initialState: {
    data: [],
    status: STATUSES.IDLE,
  },
  extraReducers: (builder) => {
    builder
      .addCase(blogDetails.pending, (state) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(blogDetails.fulfilled, (state, action) => {
        state.data.push(action.payload);
        state.status = STATUSES.IDLE;
      })
      .addCase(blogDetails.rejected, (state) => {
        state.status = STATUSES.ERROR;
      });
  },
});

export const { setforms, setStatus } = formSlice.actions;
export default formSlice.reducer;

// Thunks
export const blogDetails = createAsyncThunk('forms/post', async (values) => {
  try {
    const response = await axios.post('https://my-json-server.typicode.com/7898116274/data/user', values);
    return response.data; // Use response.data instead of await response.json(values)
  } catch (error) {
    throw new Error('Failed to post data');
  }
});

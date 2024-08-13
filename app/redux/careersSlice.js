// careersSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const BACKEND_CAREER_URI = process.env.NEXT_PUBLIC_BACKEND_CAREER_URI;

export const fetchCareers = createAsyncThunk(
  'careers/fetchCareers',
  async () => {
    const response = await fetch(BACKEND_CAREER_URI);
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error('Failed to fetch data');
    }
  }
);

const careersSlice = createSlice({
  name: 'careers',
  initialState: {
    careersData: [],
    selectedIndex: 0,
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCareers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCareers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.careersData = action.payload;
        state.selectedIndex=action.payload;
      })
      .addCase(fetchCareers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default careersSlice.reducer;

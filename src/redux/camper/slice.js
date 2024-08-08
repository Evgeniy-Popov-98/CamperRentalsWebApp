import { createSlice } from '@reduxjs/toolkit';
import { fetchCampers } from './operations';

const camperSlice = createSlice({
  name: 'campers',
  initialState: {
    item: [],
    isLoader: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCampers.pending)
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.isLoader = false;
        state.error = null;
        state.item = action.payload;
      })
      .addCase(fetchCampers.rejected);
  },
});

export const camperReducer = camperSlice.reducer;

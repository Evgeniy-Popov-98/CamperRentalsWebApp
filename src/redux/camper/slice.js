import { createSlice } from '@reduxjs/toolkit';
import { fetchCampers } from './operations';

const camperSlice = createSlice({
  name: 'camper',
  initialState: [],
  extraReducer: builder => {
    builder.addCase(fetchCampers.pending);
    builder.addCase(fetchCampers.fulfilled, (state, action) => {
      console.log(state, action);
    });
    builder.addCase(fetchCampers.rejected);
  },
});

export const camperReducer = camperSlice.reducer;

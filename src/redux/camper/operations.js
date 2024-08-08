import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://66b316c37fba54a5b7eb5981.mockapi.io/api',
});

export const fetchCampers = createAsyncThunk(
  'campers/fetchAll',
  async (_, thunkApi) => {
    try {
      const response = await instance.get('/adverts');
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

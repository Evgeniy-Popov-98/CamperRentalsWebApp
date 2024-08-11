import { configureStore } from '@reduxjs/toolkit';
import { camperReducer } from './camper/slice';
import { favoritesReducer } from './favorites/slice';
import { filtersReducer } from './filters/slice';

export const store = configureStore({
  reducer: {
    campers: camperReducer,
    favorites: favoritesReducer,
    filters: filtersReducer,
  },
});

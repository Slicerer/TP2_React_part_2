import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid'; // Importez la fonction v4 de la bibliothèque uuid

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: {
    favorites: [],
  },
  reducers: {
    addFavorite: (state, action) => {
      const mealToAdd = action.payload;

      mealToAdd.id = uuidv4();
      if (!state.favorites.some((meal) => meal.id === mealToAdd.id)) {
        state.favorites.push(mealToAdd);
      }
    },
    removeFavorite: (state, action) => {
      const mealToRemove = action.payload;
      state.favorites = state.favorites.filter((meal) => meal.id !== mealToRemove.id);
    },
  },
});

export const { addFavorite, removeFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;

import { configureStore } from '@reduxjs/toolkit'
import favoriteReducer from '../components/favorites/store/favoritesSlice';

export default configureStore({
  reducer: {
    favorites: favoriteReducer,
  },
});



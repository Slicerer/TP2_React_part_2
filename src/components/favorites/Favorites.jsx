import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { favoritesSelector } from './store/favoritesSelectors';
import { removeFavorite } from './store/favoritesSlice'; // Assurez-vous d'importer les actions appropriées

const FavoritesPage = () => {
  const favorites = useSelector(favoritesSelector);
  const dispatch = useDispatch();

  const removeFromFavorites = (meal) => {
    dispatch(removeFavorite(meal));
  };

  return (
    <div>
      <h1 className='text-blue-400 text-center my-6 text-4xl'>My Favorites</h1>
      <ul>
        {favorites.map((meal) => (
          <li key={meal.idMeal}>
            {meal.strMeal}
            <button className='p-6 bg-slate-600 rounded-2xl' onClick={() => removeFromFavorites(meal)}>
              Remove from Favorites
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoritesPage;
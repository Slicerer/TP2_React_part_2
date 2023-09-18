import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { favoritesSelector } from './store/favoritesSelectors';
import { removeFavorite } from './store/favoritesSlice';

const FavoriteRecipeDetail = ({ mealId }) => {
  const favorites = useSelector(favoritesSelector);
  const dispatch = useDispatch();

  const removeFromFavorites = (meal) => {
    dispatch(removeFavorite(meal));
  };

  const favoriteMeal = favorites.find((meal) => meal.id === mealId);

  if (!favoriteMeal) {
    return <div>Recipe not found in favorites.</div>;
  }

  return (
    <div>
      <h1>{favoriteMeal.name}</h1>
      <p>{favoriteMeal.description}</p>
      <button onClick={() => removeFromFavorites(favoriteMeal)}>
        Remove from Favorites
      </button>
    </div>
  );
};

export default FavoriteRecipeDetail;
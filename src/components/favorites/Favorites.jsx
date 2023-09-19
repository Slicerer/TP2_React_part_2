import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { favoritesSelector } from './store/favoritesSelectors';
import { removeFavorite } from './store/favoritesSlice'; // Assurez-vous d'importer les actions appropriées
import { Link } from 'react-router-dom';

const FavoritesPage = () => {
  const favorites = useSelector(favoritesSelector);
  const dispatch = useDispatch();

  const removeFromFavorites = (meal) => {
    dispatch(removeFavorite(meal));
  };

  return (
    <div className='mx-auto w-3/5 bg-neutral-200'>
      <h1 className='text-blue-400 text-center my-6 text-4xl'>My Favorites</h1>
         
        {favorites.map((meal) => (
         
          <li className='m-4' key={meal.idMeal}> {meal.strMeal} <br />
          <Link className='bg-red-300 rounded-lg p-1 m-3' to={`/meals/${meal.idMeal}`}>{meal.strMeal}</Link>  <br />
       
            <button className='p-3 bg-red-600 rounded-2xl mt-3' onClick={() => removeFromFavorites(meal)}>
              Remove from Favorites
            </button>
          </li>
        ))}
    
    </div>
  );
};

export default FavoritesPage;






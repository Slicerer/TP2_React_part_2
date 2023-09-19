import { Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import AllFoods from './Components/allFoods/AllFoods';
import AllFood from './components/allFood/AllFood'
import Repas from './Components/Repas/Repas';

import FavoritesPage from './components/favorites/Favorites';


const queryClient = new QueryClient(); //requete de l'api stocké dans la cache pour reutliser dans le projets au besoin

function App() {


  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path='/' element={<AllFoods />}/>
        <Route path='/categories/:name' element={<AllFood />}/>
        <Route path='/meals/:id' element={<Repas />}/>
        <Route path='/favorites' element={<FavoritesPage />} />
      </Routes>
  </QueryClientProvider>
  )
}

export default App;

import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'
import MealService from '../../Service/MealService';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

const mealService = new MealService();

const AllFoods = () => {
    const {isLoading, isError, data, error} = useQuery({
        queryKey: ['allfoods'],
        queryFn: () => mealService.getAllFoods(),
    });

    if (isLoading) return <div>Loading</div>
    if (isError) return <div>Error: {error.message}</div>

  return (
    <Container>
        <h1 className='text-5xl font-bold text-center  text-red-400'>Livre de recette</h1>
        <Card className='my-6 bg-neutral-200 w-96 mx-auto'>
            <Card.Title className='text-3xl text-center py-5 fw-bold text-red-400'>Selectioné un catégorie</Card.Title>
            <div className='my-2 '>
                {data && data.categories.map(menuCate =>
                    <Link className='text-center ' to={`/categories/${menuCate.strCategory}`} key={menuCate.idCategory}>
                        <Card.Subtitle className='py-2 text-3xl text-blue-500'>{menuCate.strCategory}</Card.Subtitle>
                    </Link>
                )}
            </div>
        </Card>
    </Container>
  )
}

export default AllFoods;
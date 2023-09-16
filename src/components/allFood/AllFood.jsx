import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import MealService from '../../Service/MealService';

const mealService = new MealService();


const AllFood = () => {
    const params = useParams();

    const { isLoading, isError, data, error } = useQuery({
        queryKey: ['food', params.name],
        queryFn: () => mealService.getFood(params.name),
    });

    if (isLoading) return <div>Loading</div>
    if (isError) return <div>Error: {error.message}</div>

  return (
    <Container fluid className='text-center'>
        <Link className='text-4xl text-red-400' to='/'>Retour au livre de recette</Link>
        <Card className='my-6 border-4 border-red-400 w-2/5 mx-auto'>
            <Col md={12}>
                <Card.Title className=' py-3 text-4xl text-dark'>{params.name}</Card.Title>
                <div className='py-4'>
                    {data && data.meals.map(meal =>
                        <div className=' flex-row-reverse mt-2 justify-content-center align-items-center  bg-red-200' key={meal.strMeal}>
                            <Link to={`/meals/${meal.idMeal}`} >
                                <Card.Subtitle className='text-xl text-black '>{meal.strMeal}</Card.Subtitle>
                            </Link>
                            <Col md={1}>
                                <Image src={meal.strMealThumb} alt={meal.strMeal} fluid/>
                            </Col>
                        </div>
                    )}
                </div>
            </Col>
        </Card>
    </Container>
  )
}

export default AllFood;
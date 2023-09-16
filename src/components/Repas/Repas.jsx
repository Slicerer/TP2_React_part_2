import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import MealService from '../../Service/MealService';
import Accordeon from '../Accordeon/Accordeon';




const mealService = new MealService();  

const Repas = () => {
  const params = useParams();

  const { isLoading, isError, data, error } = useQuery({
      queryKey: ['repas', params.id],
      queryFn: () => mealService.getRepas(params.id),
  });

  if (isLoading) return <div>Loading</div>
  if (isError) return <div>Error: {error.message}</div>

  return (
    <Container fluid className='text-center  flex flex-col justify-center items-center'>

        <Link className=' text-red-400 mt-6 text-5xl font-bold  
         ' to='/'>
          Retour au menu d'accueil
          </Link>
          
        <Card className='my-5 mt-5 mx-auto'>
          <Col md={12}>
            {data && data.meals.map(info =>
                <Col key={info.idMeal}>
                  <Card.Title
                   className='text-3xl text-black'>{info.strMeal}
                  </Card.Title>

                  <Card.Text
                   className='text-3xl'>{info.strCategory}
                  </Card.Text>
                  <Image className='mx-auto' src={info.strMealThumb} alt={info.strMeal} fluid thumbnail />
                  <Accordeon info={info}></Accordeon>
                </Col>
            )}
          </Col>
        </Card>
    </Container>
  )
}

export default Repas;
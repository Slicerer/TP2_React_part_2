import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Recette from '../../components/Repas/Recette';
import 'react-bootstrap-typeahead/css/Typeahead.css';

const Accordeon = ({info}) => {
  return (
    <Accordion>

      <Accordion.Item eventKey="0">
        <Accordion.Header className='text-2xl bg-neutral-200'>Quantites</Accordion.Header>
        <Accordion.Body className='bg-neutral-200'>
            <Recette info={info}></Recette>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header className='text-red-400 bg-neutral-200'>Procedure</Accordion.Header>
        <Accordion.Body className='text-red-400 bg-neutral-200'>
            {info.strInstructions}
        </Accordion.Body>
      </Accordion.Item>
      
    </Accordion>
  )
}
export default Accordeon;
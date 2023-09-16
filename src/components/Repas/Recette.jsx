import React from 'react';

const Recette = ({ info }) => {
    const quantites = Array.from({ length: 20 }, (_, i) => {
        const ingredient = info[`strIngredient${i + 1}`];
        const measure = info[`strMeasure${i + 1}`];

        if (ingredient && ingredient.trim() !== '' && measure && measure.trim() !== '') {  //trim pour retirer epace indesirable
            return (
                <li className='text-red-400' key={i}>
                    <span> {measure} </span>
                    <span className='text-xl'>- {ingredient}</span>
                </li>
            );
        }

        return null;
    }).filter(Boolean);   //ici si jai des alement false ou null ils seront retiré

    return (
        <ul className='text-red-400'>
            {quantites}
        </ul>
    );
}

export default Recette;

import React from 'react';
import pokeBallImage from '../images/pokeball.png';

export const PokemonCard = ({ name, imgSrc }) => {
  return (
    <div className="Pokemon">
      <img className="Pokemon__image"
        src={imgSrc}
        alt={name} />
      <h1>{name}</h1>
    </div>
  );
}

PokemonCard.defaultProps = {
  name: 'No Pokemon Around',
  imgSrc: pokeBallImage
};

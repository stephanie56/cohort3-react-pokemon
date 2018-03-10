import React from 'react';
import pokeBall from '../images/pokeball.png';

export const PokeList = ({list}) => {
  return (
    <ul className="PokeList">
      {list.map(({name, image}) => {
        console.log(image);
        return <li key={name}><img src={image} />{name}</li>;
      })}
    </ul>
  );
}

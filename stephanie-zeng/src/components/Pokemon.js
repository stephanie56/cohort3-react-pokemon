import React from 'react';

export const LoadingIndicator = msg => <div className="Card__msg">{ msg }</div>;

export const Pokemon = (name, image) => {
  return (
    <div className="Card__pokemon">
      <img className="Card__image"
        src={ image }
        alt={ name }
      />
    <h1>{ name }</h1>
    </div>
  );
};

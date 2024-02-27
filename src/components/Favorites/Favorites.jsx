import React, { useState } from 'react';
import { useSelector } from 'react-redux';

function Favorites() {
  const favorites = useSelector((store) => store.favorites);
  return (
    <div className="img-group">
      <h3>FAVORITES</h3>
      <ul>
        {favorites.map((favoritesImage) => {
          return (
            <>
              <span className="cardColor">
                <img src={favoritesImage.url} alt={favoritesImage.alt} />
              </span>
            </>
          );
        })}
      </ul>
    </div>
  );
}

export default Favorites;

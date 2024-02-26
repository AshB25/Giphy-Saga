import React, { useState } from 'react';
import { FcLikePlaceholder, FcLike } from 'react-icons/fc';

function FavButton() {
  const [fav, setFav] = useState(false);

  const handleClick = () => {
    setFav(!fav);
    if (fav) {
      return <FcLikePlaceholder size="35" onClick={handleClick} />;
    }
    return <FcLike size="35" onClick={handleClick} />;
  };
}

export default FavButton;

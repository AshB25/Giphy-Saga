import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import FavButton from '../FavButton/FavButton';
import { FcLikePlaceholder, FcLike } from 'react-icons/fc';

function ImageResult() {
  const giphy = useSelector((store) => store.giphy);
  const [fav, setFav] = useState(false);

  const handleClick = () => {
    setFav(!fav);
    if (fav) {
      return <FcLikePlaceholder size="35" onClick={handleClick} />;
    }
    // return <FcLike size="35" onClick={handleClick} />;
  };
  return (
    <div className="img-group">
      <ul>
        {giphy.map((giphyImage) => {
          return (
            <>
              <span className="cardColor">
                <img src={giphyImage.url} alt={giphyImage.alt} />
                <button className="like-btn">
                  {fav ? <FcLikePlaceholder /> : <FcLike />}
                </button>
              </span>
            </>
          );
        })}
      </ul>
    </div>
  );
}

export default ImageResult;

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import FavButton from '../FavButton/FavButton';
import { FcLikePlaceholder, FcLike } from 'react-icons/fc';
import { isPending } from '@reduxjs/toolkit';

function ImageResult() {
  const giphy = useSelector((store) => store.giphy);
  const [liked, setLiked] = useState(false);
  const [pending, setIsPending] = useState(false);

  const handleClick = async () => {
    try {
      setIsPending(true);
      const response = await fetch('/api/favorites/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: liked ? true : false,
        }),
      });

      if (!response.ok) {
        return;
      }
      setLiked(!liked);
    } finally {
      setIsPending(false);
    }
  };
  return (
    <div className="img-group">
      <ul>
        {giphy.map((giphyImage) => {
          return (
            <>
              <span className="cardColor">
                <img src={giphyImage.url} alt={giphyImage.alt} />
                <button className="like-btn" onClick={handleClick}>
                  {isPending ? <FcLikePlaceholder /> : <FcLike />}
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

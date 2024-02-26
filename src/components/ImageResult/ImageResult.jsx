import { useSelector } from 'react-redux';

function ImageResult() {
  const giphy = useSelector((store) => store.giphy);

  return (
      <div className='img-group'>
      <ul > 
        {giphy.map((giphyImage) => {
          return (
            <span className='cardColor'>
              <img src={giphyImage.url} alt={giphyImage.alt} />
            </span>
          );
        })}
      </ul>
    </div>
  );
}

export default ImageResult;
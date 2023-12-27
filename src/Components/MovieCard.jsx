import React from 'react';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original';

const MovieCard = ({ movie }) => {
  return (
    <div>
      <img
        src={IMAGE_BASE_URL + movie.poster_path}
        alt=""
        className=' w-[200px] rounded-lg'
      />
    </div>
  );
};

export default MovieCard;

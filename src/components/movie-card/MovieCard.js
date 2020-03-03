import React from 'react';
import { Link } from 'react-router-dom';

//Favoritos - movie item
const MovieCard = props => {
  const movie = props.movie;

  return (
    <div className='card-container'>
      <div>
        <h2>
          <Link to={`/show-movie/${movie._id}`}>{movie.moviename}</Link>
        </h2>
      </div>
      <img
        src='https://commapress.co.uk/books/the-book-of-cairo/cairo-provisional-v3/image%2Fspan3'
        alt=''
      />
      <div className='desc'>
        <h3>{movie.genre}</h3>
        <p>{movie.cast}</p>
      </div>
    </div>
  );
};

export default MovieCard;

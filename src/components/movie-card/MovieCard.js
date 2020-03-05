import React from 'react';
import { Link } from 'react-router-dom';
import useStyles from './MovieCard.styles';

//Favoritos - movie item
const MovieCard = props => {
  const classes = useStyles();
  const movie = props.movie;
  console.log(movie, 'movieCard');

  return (
    <div className={classes.cardContainer}>
      <div>
        <h2>
          <Link to={`/show-movie/${movie._id}`} className={classes.linkCard}>
            <p>{movie.moviename}</p>
          </Link>
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

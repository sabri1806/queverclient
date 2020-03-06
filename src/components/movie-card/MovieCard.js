import React from 'react';
import { Link } from 'react-router-dom';
import useStyles from './MovieCard.styles';
import image from '../../assets/images/noFavouriteImg.png';
//Favoritos - movie item
const MovieCard = props => {
  const classes = useStyles();
  const movie = props.movie;

  return (
    <div className={classes.cardContainer}>
      <div>
        <h2>
          <Link to={`/show-movie/${movie._id}`} className={classes.linkCard}>
            <p>{movie.moviename}</p>
          </Link>
        </h2>
      </div>
      <img src={image} alt='' style={{ width: 207, height: 300 }} />
      <div className='desc'>
        <h3>{movie.genre}</h3>
        <p>{movie.cast}</p>
      </div>
    </div>
  );
};

export default MovieCard;

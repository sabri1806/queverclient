import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import movieActions from '../../redux/actions/movie.actions';
import RateMovie from '../rate-movie/RateMovie';
import MovieService from '../../services/MovieService';

//consulta de peliculas - detalle
const MovieDetail = ({
  getMovieDetail,
  movie,
  match,
  history,
  removeLastMovie,
}) => {
  const [average, setAverage] = useState(null);
  console.log(movie);
  const handleCalculateRate = (movie, rateValue) => {
    MovieService.calculateRate(movie.imdbID, rateValue).then(response => {
      console.log(response.data);
      setAverage(response.data.average);
    });
  };

  useEffect(() => {
    if (!movie) {
      getMovieDetail(match.params.id);
    }
    if (!average && movie) {
      handleCalculateRate(movie);
    }
  });

  const clearCurrentMovie = () => {
    history.push('/search-movie/');
    removeLastMovie();
  };

  if (!movie) return null;

  const handleRateMovie = rateValue => {
    const user = JSON.parse(localStorage.getItem('user'));
    MovieService.rateMovieQueVer(
      user.email,
      movie.imdbID,
      rateValue,
    ).then(data => {}, handleCalculateRate(movie));
  };

  return (
    <Grid container style={{ textAlign: 'center' }}>
      <Grid item xs={8} sm={3}>
        <div
          style={{
            border: '1px solid #000',
            backgroundColor: '#eff5ef',
            margin: '5px',
            padding: '10px ',
          }}
        >
          <h2>{movie.Title}</h2>
          <div>
            <img
              width='200'
              alt={`Movie name: ${movie.Title}`}
              src={
                movie.Poster === 'N/A'
                  ? 'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg'
                  : movie.Poster
              }
            />
          </div>
          <hr />
          {movie.Genre}
          <hr />
          IMDB rating: {movie.imdbRating}
          <hr />
          <div style={{ paddingBottom: '10px' }}>Que Ver Rating: {average}</div>
          <RateMovie rateMovie={handleRateMovie} movie={movie} />
          <hr />
          <p>{movie.Plot}</p>
          <hr />
          Cast: {movie.Actors}
          <hr />
          <div>
            <button
              onClick={clearCurrentMovie}
              className='btn btn-primary'
              type='submit'
            >
              Back
            </button>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};
const mapStateToProps = ({ movieReducer }) => {
  // console.log(movieReducer, '-->lo que viene en reducer');
  return { movie: movieReducer.movieDetail };
};

const mapDispatchToProps = {
  getMovieDetail: movieActions.getMovieDetail,
  removeLastMovie: movieActions.removeLastMovie,
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import movieActions from '../redux/actions/movie.actions';
import RateMovie from './RateMovie';
import MovieService from '../services/MovieService';

//consulta de peliculas - detalle
const MovieDetail = ({
  getMovieDetail,
  movie,
  match,
  history,
  removeLastMovie,
}) => {
  useEffect(() => {
    if (!movie) {
      getMovieDetail(match.params.id);
    }
  });

  const clearCurrentMovie = () => {
    history.push('/search-movie/');
    removeLastMovie();
  };

  if (!movie) return null;

  const rateMovie = movie => {
    console.log('llega');
    MovieService.rateMovieQueVer(movie).then(data => {
      console.log(data);
    });
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
          <div style={{ paddingBottom: '10px' }}>Que Ver Rating: 8.9</div>
          <RateMovie onChange={rateMovie} />
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
  console.log(movieReducer, '-->lo que viene en reducer');
  return { movie: movieReducer.movieDetail };
};

const mapDispatchToProps = {
  getMovieDetail: movieActions.getMovieDetail,
  removeLastMovie: movieActions.removeLastMovie,
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);

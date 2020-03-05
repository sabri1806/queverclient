import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useIntl } from 'react-intl';
import { Link } from 'react-router-dom';
import movieActions from '../../redux/actions/movie.actions';
import MovieService from '../../services/MovieService';
import MainLayout from '../main-layout/MainLayout';
import Box from '../box/Box';

//Favoritos - detalle de la pelicula a editar o eliminar
const ShowMovieDetails = ({ history, getMovie, match, movie }) => {
  const { formatMessage } = useIntl();

  useEffect(() => {
    getMovie(match.params.id);
  }, [getMovie, match]);

  const onDeleteClick = id => {
    MovieService.deleteFavouriteMovie(id)
      .then(res => {
        history.push('/favourite-movies');
      })
      .catch(err => {
        console.log('Error form ShowMovieDetails_deleteClick');
      });
  };
  if (!movie) return null;
  let MovieItem = (
    <div>
      <table className='table table-hover table-dark'>
        <tbody>
          <tr>
            <th scope='row'>1</th>
            <td>Movie name</td>
            <td>{movie.moviename}</td>
          </tr>
          <tr>
            <th scope='row'>2</th>
            <td>Genre</td>
            <td>{movie.genre}</td>
          </tr>
          <tr>
            <th scope='row'>3</th>
            <td>Description</td>
            <td>{movie.description}</td>
          </tr>
          <tr>
            <th scope='row'>4</th>
            <td>Year</td>
            <td>{movie.year}</td>
          </tr>
          <tr>
            <th scope='row'>5</th>
            <td>Cast</td>
            <td>{movie.cast}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
  return (
    <MainLayout
      history={history}
      title={formatMessage({ id: 'menu.favourites.show' })}
    >
      <Box>
        <div className='ShowMovieDetails'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-10 m-auto'>
                <br /> <br />
                <Link
                  to={'/favourite-movies'}
                  className='btn btn-outline-warning float-left'
                >
                  Show Movie List
                </Link>
              </div>
              <br />
              <div className='col-md-8 m-auto'>
                <p className='lead text-center'>View Movie's Info</p>
                <hr /> <br />
              </div>
            </div>
            <div>{MovieItem}</div>

            <div className='row'>
              <div className='col-md-6'>
                <button
                  type='button'
                  className='btn btn-outline-danger btn-lg btn-block'
                  onClick={() => onDeleteClick(movie._id)}
                >
                  Delete Movie
                </button>
                <br />
              </div>

              <div className='col-md-6'>
                <Link
                  to={`/edit-movie/${movie._id}`}
                  className='btn btn-outline-info btn-lg btn-block'
                >
                  Edit Movie
                </Link>
                <br />
              </div>
            </div>
          </div>
        </div>
      </Box>
    </MainLayout>
  );
};

const mapStateToProps = ({ movieReducer }) => {
  const { movie } = movieReducer;
  console.log(movie);
  return {
    movie,
  };
};

const mapDispatchToProps = {
  getMovie: movieActions.getMovie,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowMovieDetails);

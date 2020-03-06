import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useIntl } from 'react-intl';
import movieActions from '../../../../redux/actions/movie.actions';
import MovieService from '../../../../services/MovieService';
import MainLayout from '../../../../components/main-layout/MainLayout';
import Box from '../../../../components/box/Box';
import styles from './FavouriteDetail.styles';
import { Button } from '@material-ui/core';

//Favoritos - detalle de la pelicula a editar o eliminar
const FavouriteDetail = ({ history, getMovie, match, movie }) => {
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
              <div style={styles.showFavoritesMovieList}>
                <Button
                  onClick={() => history.push('/favourite-movies')}
                  style={{ color: '#fff' }}
                  variant='contained'
                  color='primary'
                >
                  Show Movie List
                </Button>
              </div>
              <div className='col-md-8 m-auto'>
                <p className='lead text-center'>Movie's Info</p>
                <hr /> <br />
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              {MovieItem}
            </div>

            <div
              className='row'
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              <div className='col-md-6' style={{ padding: 24 }}>
                <Button
                  onClick={() => onDeleteClick(movie._id)}
                  style={{ color: '#fff' }}
                  variant='contained'
                  color='primary'
                >
                  Delete Movie
                </Button>
                <br />
              </div>

              <br />
              <div className='col-md-6' style={{ padding: 24 }}>
                <Button
                  onClick={() => history.push(`/edit-movie/${movie._id}`)}
                  style={{ color: '#fff' }}
                  variant='contained'
                  color='primary'
                >
                  Edit Movie
                </Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(FavouriteDetail);

import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { useIntl } from 'react-intl';
import MovieService from '../../services/MovieService';
import MainLayout from '../../components/main-layout/MainLayout';
import Box from '../../components/box/Box';
import { Button } from '@material-ui/core';
import useStyles from './WatchLaterMovieList.styles';

const ShowWatchLaterMovieList = ({ history }) => {
  const classes = useStyles();
  const { formatMessage } = useIntl();
  const [movies, setMovies] = useState(null);

  const deleteWatchLater = movie => {
    MovieService.deleteWatchLaterMovie(movie).then(data => {});
  };

  const deleteAllWatchLater = () => {
    MovieService.deleteAllWatchLaterMovie().then(data => {});
  };

  useEffect(() => {
    MovieService.getWatchLaterMovies().then(response => {
      setMovies(response.data);
    });
  }, []);

  return (
    <MainLayout
      history={history}
      title={formatMessage({ id: 'menu.watchLater' })}
    >
      <Box>
        <Grid className={classes.deleteAll}>
          <Button
            variant='contained'
            color='primary'
            onClick={deleteAllWatchLater}
            className='btn btn-primary'
            type='submit'
            disabled={!movies || movies.length === 0}
          >
            {formatMessage({ id: 'watchLaterPage.deleteButton' })}
          </Button>
        </Grid>
        <Grid container>
          {movies &&
            movies.map(movie => {
              return (
                <Grid
                  key={movie.omDBId}
                  container
                  item
                  xs={6}
                  sm={3}
                  style={{ margin: 5 }}
                >
                  <div
                    style={{
                      border: '1px solid #000',
                      backgroundColor: '#eff5ef',
                      margin: '5px',
                      padding: '10px ',
                    }}
                  >
                    <div>{movie.title}</div>
                    <div>
                      <img src={movie.poster} alt='' width='200'></img>
                    </div>
                    <div style={{ position: 'absolute' }}>
                      <button
                        type='button'
                        onClick={() => deleteWatchLater(movie._id)}
                        className='btn btn-danger'
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </Grid>
              );
            })}
        </Grid>
      </Box>
    </MainLayout>
  );
};

export default ShowWatchLaterMovieList;

import React, { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import MainLayout from '../../components/main-layout/MainLayout';
import Box from '../../components/box/Box';
import MovieService from '../../services/MovieService';
import { Grid, Card } from '@material-ui/core';
import useStyles from './Home.styles';

const Home = ({ history }) => {
  const { formatMessage } = useIntl();
  const classes = useStyles();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    MovieService.getPopularMovies().then(response => {
      setMovies(response.data.results);
    });
  }, []);

  return (
    <MainLayout history={history} title={formatMessage({ id: 'menu.home' })}>
      <Box>
        <div style={{ textAlign: 'center', marginTop: '15px' }}>
          <p className={classes.title}>
            {formatMessage({ id: 'homePage.popular.title' })}
          </p>
          <Grid container spacing={8}>
            {movies.map(movie => {
              return (
                <Grid key={movie.id} item xs={3}>
                  <Card>
                    <img
                      src={`http://image.tmdb.org/t/p/w185/${movie.poster_path}`}
                      width='100'
                      height='100'
                      alt='Not_Image_found'
                    />
                    <p>
                      {movie.title} - {movie.popularity}
                    </p>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </div>
      </Box>
    </MainLayout>
  );
};

export default Home;

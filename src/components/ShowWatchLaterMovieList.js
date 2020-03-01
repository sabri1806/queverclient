import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import MovieService from '../services/MovieService';
import MainLayout from './MainLayout';

const ShowWatchLaterMovieList = () => {
  const [movies, setMovies] = useState([]);

  const deleteWatchLater = movie => {
    console.log(setMovies);
    MovieService.deleteWatchLaterMovie(movie).then(data => {
      console.log(data);
    });
  };

  const deleteAllWatchLater = movie => {
    MovieService.deleteAllWatchLaterMovie(movies).then(data => {
      console.log(data);
    });
  };

  useEffect(() => {
    if (movies.length === 0) {
      MovieService.getWatchLaterMovies().then(response => {
        console.log(response.data);
        setMovies(response.data);
      });
    }
  });

  return (
    <MainLayout>
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
                  {movie.Title}
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
        <button
          type='button'
          onClick={() => deleteAllWatchLater()}
          className='btn btn-default btn-lg'
        >
          Delete all
        </button>
      </Grid>
    </MainLayout>
  );
};

export default ShowWatchLaterMovieList;

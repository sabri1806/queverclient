import React, { useState } from 'react';
import { useIntl } from 'react-intl';
import { Link } from 'react-router-dom';
import MovieService from '../../../../services/MovieService';
import MainLayout from '../../../../components/main-layout/MainLayout';
import Box from '../../../../components/box/Box';
import { Button, Grid } from '@material-ui/core';
import CustomTextField from '../../../../components/custom-text-field/CustomTextField';
import useStyles from './CreateFavourteMovie.styles';

//Favoritos - creacion
const CreateFavoriteMovie = ({ history }) => {
  const { formatMessage } = useIntl();
  const [newFavourite, setNewFavourite] = useState({
    moviename: '',
    description: '',
    genre: '',
    year: '',
    cast: '',
  });

  const classes = useStyles();

  const onChange = e => {
    setNewFavourite({ ...newFavourite, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem('user'));
    const data = {
      moviename: newFavourite.moviename,
      description: newFavourite.description,
      genre: newFavourite.genre,
      year: newFavourite.year,
      cast: newFavourite.cast,
      email: user.email,
    };

    MovieService.saveFavourite(data)
      .then(res => {
        setNewFavourite({
          moviename: '',
          description: '',
          genre: '',
          year: '',
          cast: '',
        });
        this.props.history.push('/favourite-movies');
      })
      .catch(err => {
        console.log('Error in CreateFavoriteMovie!');
      });
  };

  return (
    <MainLayout
      history={history}
      title={formatMessage({ id: 'menu.favourites.create' })}
    >
      <Box>
        <div className='CreateFavoriteMovie'>
          <div className='container'>
            <div className='row'>
              <div
                className='col-md-8 m-auto'
                style={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  padding: 24,
                }}
              >
                <Link
                  style={{ textDecoration: 'none' }}
                  to='/favourite-movies'
                  className='btn btn-outline-warning float-left'
                >
                  <Button
                    variant={'contained'}
                    color='primary'
                    style={{ color: '#fff' }}
                  >
                    {formatMessage({
                      id: 'favouritesPage.createFavourite.showListBtn',
                    })}
                  </Button>
                </Link>
              </div>
              <Grid container style={{ padding: 24 }}>
                <Grid item xs={12} md={6}>
                  <CustomTextField
                    className={classes.input}
                    name='moviename'
                    type='text'
                    placeholder={formatMessage({
                      id: 'favouritesPage.createFavourite.movieName',
                    })}
                    value={newFavourite.moviename}
                    onChange={onChange}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <CustomTextField
                    className={classes.input}
                    name='description'
                    type='text'
                    placeholder={formatMessage({
                      id: 'favouritesPage.createFavourite.description',
                    })}
                    value={newFavourite.description}
                    onChange={onChange}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <CustomTextField
                    className={classes.input}
                    name='genre'
                    type='text'
                    placeholder={formatMessage({
                      id: 'favouritesPage.createFavourite.genre',
                    })}
                    value={newFavourite.genre}
                    onChange={onChange}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <CustomTextField
                    className={classes.input}
                    name='year'
                    type='text'
                    placeholder={formatMessage({
                      id: 'favouritesPage.createFavourite.year',
                    })}
                    value={newFavourite.year}
                    onChange={onChange}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <CustomTextField
                    className={classes.input}
                    name='cast'
                    type='text'
                    placeholder={formatMessage({
                      id: 'favouritesPage.createFavourite.cast',
                    })}
                    value={newFavourite.cast}
                    onChange={onChange}
                  />
                </Grid>
                <Grid container>
                  <Button
                    style={{ marginTop: 30, color: '#fff' }}
                    onClick={onSubmit}
                    variant={'contained'}
                    color='primary'
                  >
                    Save
                  </Button>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </Box>
    </MainLayout>
  );
};

export default CreateFavoriteMovie;

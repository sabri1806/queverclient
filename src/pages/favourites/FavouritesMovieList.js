import React, { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import MovieCard from '../../components/movie-card/MovieCard';
import MainLayout from '../../components/main-layout/MainLayout';
import MovieService from '../../services/MovieService';
import useStyles from './FavouritesMovieList.styles';
import Box from '../../components/box/Box';
import CustomDialog from '../../components/custom-dialog/CustomDialog';
import CustomTextField from '../../components/custom-text-field/CustomTextField';
import { Button } from '@material-ui/core';
import CustomSnackbar from '../../components/custom-snackbar/CustomSnackbar';

//Favoritos - lista de peliculas
const ShowMovieList = ({ history }) => {
  const { formatMessage } = useIntl();
  const classes = useStyles();
  const [movies, setMovies] = useState([]);
  const [open, setOpen] = useState(false);
  const [emailTo, setEmailTo] = useState(null);
  const [snackBarOpen, setSnackBarOpen] = useState(false);

  useEffect(() => {
    MovieService.getFavouritesMovies()
      .then(res => {
        setMovies(res.data);
      })
      .catch(err => {
        console.log('Error from ShowFavoritesMovieList');
      });
  }, []);

  const closeDialog = () => {
    setOpen(false);
    setEmailTo(null);
  };

  const confirm = () => {
    //TODO: update con usuario real logueado
    const data = {
      firstName: 'gennaro',
      lastName: 'toranzo',
      email: 'sabrinita185@gmail.com',
      emailTo: emailTo,
    };
    //TODO: agregar snackbar
    MovieService.shareFavourites(data).then(() => {
      setOpen(false);
      setSnackBarOpen(true);
    });
  };

  return (
    <MainLayout
      history={history}
      title={formatMessage({ id: 'menu.favourites' })}
    >
      <Box>
        <div className={classes.showFavoritesMovieList}>
          <div className='container'>
            <div className='row'>
              <div className='col-md-12'>
                <br />
                <h2 className='display-4 text-center'>Favorites Movies List</h2>
              </div>
              <div className='col-md-11'>
                <Link
                  to='/create-favorite-movie'
                  className='btn btn-outline-warning float-right'
                >
                  + Add New Favorite Movie
                </Link>
                <Button onClick={() => setOpen(true)}>
                  + Share List of Movies Favorites
                </Button>
                {/* <Link
                  to='/share-movie'
                  className='btn btn-outline-warning float-left'
                >
                  + Share List of Movies Favorites
                </Link> */}

                <br />
                <br />
                <hr />
              </div>
            </div>

            <div className='list'>
              {movies
                ? movies.map((movie, k) => <MovieCard movie={movie} key={k} />)
                : 'there is no movie record!'}
            </div>
          </div>
        </div>
      </Box>
      <CustomDialog
        open={open}
        onClose={closeDialog}
        title={formatMessage({ id: 'favouritesPage.dialog.tile' })}
        onExited={() => setOpen(false)}
        actions={[
          {
            onClick: closeDialog,
            label: formatMessage({ id: 'btnAction.cancel' }),
          },
          {
            onClick: confirm,
            disabled: !emailTo,
            label: formatMessage({ id: 'btnAction.confirm' }),
          },
        ]}
      >
        <div style={{ minWidth: 420 }}>
          <CustomTextField
            style={{ minWidth: 300 }}
            label={formatMessage({ id: 'favouritesPage.dialog.shareWith' })}
            value={emailTo}
            onChange={e => setEmailTo(e.target.value)}
          />
        </div>
      </CustomDialog>
      <CustomSnackbar
        open={snackBarOpen}
        message={formatMessage({ id: 'favouritesPage.snackbar.success' })}
        variant={'success'}
        onClose={() => setSnackBarOpen(false)}
      />
    </MainLayout>
  );
};

const mapStateToProps = ({ appReducer }) => {
  return {
    user: appReducer.user,
    signOut: appReducer.signOut,
  };
};

export default connect(mapStateToProps, null)(ShowMovieList);

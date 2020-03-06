import React, { Component } from 'react';
import MovieService from '../../../../services/MovieService';
import MainLayout from '../../../../components/main-layout/MainLayout';
import Box from '../../../../components/box/Box';
import styles from './UpdateFavouritesMovieInfo.styes';
import CustomTextField from '../../../../components/custom-text-field/CustomTextField';
import { Button } from '@material-ui/core';
//Favoritos - Edicion
class UpdateFavoritesMovieInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {
        moviename: '',
        description: '',
        genre: '',
        year: '',
        cast: '',
      },
    };
  }

  componentDidMount() {
    MovieService.getMovieForUpdate(this.props.match.params.id).then(
      ({ data }) => {
        this.setState({ movie: data });
      },
    );
  }

  onChange = e => {
    const { movie } = this.state;
    movie[e.target.name] = e.target.value;
    this.setState({ movie });
  };

  onSubmit = e => {
    e.preventDefault();
    const { movie } = this.state;
    const data = {
      //_id: this.props.match.params.id,
      moviename: movie.moviename,
      description: movie.description,
      genre: movie.genre,
      year: movie.year,
      cast: movie.cast,
    };

    MovieService.updateMovie(this.props.match.params.id, data)
      .then(res => {
        this.props.history.push('/show-movie/' + this.props.match.params.id);
      })
      .catch(err => {
        alert('Error in UpdateFavoritesMovieInfo!');
      });
  };

  render() {
    const { movie } = this.state;
    if (!movie) return null;
    return (
      <MainLayout>
        <Box>
          <div className={styles.updateFavoritesMovieInfo}>
            <div className='container'>
              <div className='row'>
                <div style={styles.showFavoritesMovieList}>
                  <Button
                    onClick={() => this.props.history.push('/favourite-movies')}
                    style={{ color: '#fff' }}
                    variant='contained'
                    color='primary'
                  >
                    Show Movie List
                  </Button>
                </div>
                <div style={styles.title}>
                  <h1 className='display-4 text-center'>Edit Movie</h1>
                  <p className='lead text-center' style={{ marginLeft: 30 }}>
                    (Update Favorite Movie's Info)
                  </p>
                </div>
              </div>

              <div style={styles.formContainer}>
                <form noValidate onSubmit={this.onSubmit}>
                  <div className='form-group'>
                    <label style={styles.label} htmlFor='moviename'>
                      Moviename
                    </label>
                    <CustomTextField
                      styles={styles.input}
                      name='moviename'
                      type='text'
                      placeholder='moviename'
                      value={movie.moviename}
                      onChange={this.onChange}
                    />
                  </div>
                  <br />

                  <div style={styles.formInput}>
                    <label style={styles.label} htmlFor='description'>
                      Description
                    </label>
                    <CustomTextField
                      styles={styles.input}
                      name='description'
                      type='text'
                      placeholder='descripcion'
                      value={movie.description}
                      onChange={this.onChange}
                    />
                  </div>

                  <div style={styles.formInput}>
                    <label style={styles.label} htmlFor='genre'>
                      Genre
                    </label>
                    <CustomTextField
                      styles={styles.input}
                      name='genre'
                      type='text'
                      placeholder='genre'
                      value={movie.genre}
                      onChange={this.onChange}
                    />
                  </div>

                  <div style={styles.formInput}>
                    <label style={styles.label} htmlFor='year'>
                      Year
                    </label>
                    <CustomTextField
                      styles={styles.input}
                      name='year'
                      type='text'
                      placeholder='year'
                      value={movie.year}
                      onChange={this.onChange}
                    />
                  </div>

                  <div style={styles.formInput}>
                    <label style={styles.label} htmlFor='cast'>
                      Cast
                    </label>
                    <CustomTextField
                      styles={styles.input}
                      name='cast'
                      type='text'
                      placeholder='cast'
                      value={movie.cast}
                      onChange={this.onChange}
                    />
                  </div>
                  <Button
                    type='submit'
                    style={{ marginTop: 30, color: '#fff' }}
                    onClick={this.onSubmit}
                    variant={'contained'}
                    color='primary'
                  >
                    Update Movie
                  </Button>
                  {/* <button
                    type='submit'
                    className='btn btn-outline-info btn-lg btn-block'
                  >
                    Update Movie
                  </button> */}
                </form>
              </div>
            </div>
          </div>
        </Box>
      </MainLayout>
    );
  }
}

export default UpdateFavoritesMovieInfo;

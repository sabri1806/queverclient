import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import MovieService from '../services/MovieService';

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

    return (
      <div className='UpdateFavoritesMovieInfo'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-8 m-auto'>
              <br />
              <Link
                to={'/show-favourite'}
                className='btn btn-outline-warning float-left'
              >
                Show Movie List
              </Link>
            </div>
            <div className='col-md-8 m-auto'>
              <h1 className='display-4 text-center'>Edit Movie</h1>
              <p className='lead text-center'>Update Favorite Movie's Info</p>
            </div>
          </div>

          <div className='col-md-8 m-auto'>
            <form noValidate onSubmit={this.onSubmit}>
              <div className='form-group'>
                <label htmlFor='moviename'>Moviename</label>
                <input
                  type='text'
                  placeholder='Name of the Movie'
                  name='moviename'
                  className='form-control'
                  value={movie.moviename}
                  onChange={this.onChange}
                />
              </div>
              <br />

              <div className='form-group'>
                <label htmlFor='description'>Description</label>
                <input
                  type='text'
                  placeholder='Description'
                  name='description'
                  className='form-control'
                  value={movie.description}
                  onChange={this.onChange}
                />
              </div>

              <div className='form-group'>
                <label htmlFor='genre'>Genre</label>
                <input
                  type='text'
                  placeholder='Genre'
                  name='genre'
                  className='form-control'
                  value={movie.genre}
                  onChange={this.onChange}
                />
              </div>

              <div className='form-group'>
                <label htmlFor='year'>Year</label>
                <input
                  type='text'
                  placeholder='Year of the movie'
                  name='year'
                  className='form-control'
                  value={movie.year}
                  onChange={this.onChange}
                />
              </div>

              <div className='form-group'>
                <label htmlFor='cast'>Cast</label>
                <input
                  type='text'
                  placeholder='Cast'
                  name='cast'
                  className='form-control'
                  value={movie.cast}
                  onChange={this.onChange}
                />
              </div>
              <button
                type='submit'
                className='btn btn-outline-info btn-lg btn-block'
              >
                Update Movie
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default UpdateFavoritesMovieInfo;

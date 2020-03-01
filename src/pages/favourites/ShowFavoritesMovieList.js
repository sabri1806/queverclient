import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import MovieCard from '../../components/movie-card/MovieCard';
import MainLayout from '../../components/main-layout/MainLayout';
import MovieService from '../../services/MovieService';

//Favoritos - lista de peliculas
class ShowMovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    MovieService.getFavouritesMovies()
      .then(res => {
        this.setState({
          movies: res.data,
        });
      })
      .catch(err => {
        console.log('Error from ShowFavoritesMovieList');
      });
  }

  render() {
    // const user = JSON.parse(localStorage.getItem('user'));
    const movies = this.state.movies;

    // if (!user) {
    //   return null;
    // }

    return (
      <MainLayout>
        <div className='ShowFavoritesMovieList'>
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
                <Link
                  to='/share-movie'
                  className='btn btn-outline-warning float-left'
                >
                  + Share List of Movies Favorites
                </Link>

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
      </MainLayout>
    );
  }
}

const mapStateToProps = ({ appReducer }) => {
  return {
    user: appReducer.user,
    signOut: appReducer.signOut,
  };
};

export default connect(mapStateToProps, null)(ShowMovieList);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import MovieCard from './MovieCard';
import MainLayout from './MainLayout';

//Favoritos - lista de peliculas
class ShowMovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    axios
      //get all favorites-movie
      .get('http://localhost:8082/api/favorites-movies')
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
    //const { user } = this.props;
    const user = JSON.parse(localStorage.getItem('user'));
    const movies = this.state.movies;
    let movieList;
    console.log(user);
    if (!user) {
      return null;
    }

    if (!movies) {
      movieList = 'there is no movie record!';
    } else {
      movieList = movies.map((movie, k) => <MovieCard movie={movie} key={k} />);
    }

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

            <div className='list'>{movieList}</div>
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

import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../App.css';
import MovieActions from '../redux/actions/movie.actions';
import MainLayout from './MainLayout';

//Consulta de peliculas - Búsqueda
const SearchMovie = ({ searchMovies }) => {
  const [searchText, setSearchText] = useState('');

  const search = () => {
    searchMovies(searchText);
  };

  const updateSearchText = e => {
    setSearchText(e.target.value);
  };

  return (
    <MainLayout>
      <div className='col-md-12' style={{ textAlign: 'center' }}>
        <Link to='/search-movie'>
          <h2 className='page-title'>Search Movie</h2>
        </Link>
        <input
          type='text'
          value={searchText}
          onChange={updateSearchText}
          placeholder='Enter a Movie name...'
        />
        <button
          className='btn btn-primary btn-lg'
          type='submit'
          onClick={search}
        >
          Search
        </button>
      </div>
    </MainLayout>
  );
};

const mapDispatchToProps = {
  searchMovies: MovieActions.searchMovies,
};

export default connect(null, mapDispatchToProps)(SearchMovie);

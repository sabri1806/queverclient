import React from 'react';
import MainLayout from '../../components/main-layout/MainLayout';
import SearchMovie from './components/SearchMovie';
import MovieList from '../../components/movie-list/MovieList';

const SearchMoviesPage = props => {
  return (
    <MainLayout>
      <div>
        search movie
        <SearchMovie />
        <MovieList />
      </div>
    </MainLayout>
  );
};

export default SearchMoviesPage;

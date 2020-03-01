import React from 'react';
import MainLayout from '../../components/MainLayout';
import SearchMovie from '../../components/SearchMovie';
import MovieList from '../../components/MovieList';

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

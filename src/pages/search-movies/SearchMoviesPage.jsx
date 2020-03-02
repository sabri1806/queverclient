import React from 'react';
import { useIntl } from 'react-intl';
import MainLayout from '../../components/main-layout/MainLayout';
import SearchMovie from './components/SearchMovie';
import MovieList from '../../components/movie-list/MovieList';
import Box from '../../components/box/Box';

const SearchMoviesPage = ({ history }) => {
  const { formatMessage } = useIntl();

  return (
    <MainLayout history={history} title={formatMessage({ id: 'menu.search' })}>
      <Box>
        <SearchMovie />
        <MovieList />
      </Box>
    </MainLayout>
  );
};

export default SearchMoviesPage;

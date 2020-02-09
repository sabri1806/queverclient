import React from 'react';
import SearchMovie from '../../components/SearchMovie';
import MovieList from '../../components/MovieList';

const SearchMoviesPage = props => {
    return (
        <div>
            <SearchMovie />
            <MovieList />
        </div>
    );
};


export default SearchMoviesPage;
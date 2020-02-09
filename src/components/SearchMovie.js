import React, { useState } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import '../App.css';
import MovieActions from '../redux/actions/movie.actions';

//Consulta de peliculas - Búsqueda
const SearchMovie = ({searchMovies}) => {

    const [searchText, setSearchText] = useState('');


    const search = () => {
        searchMovies(searchText)
    }

    const updateSearchText = e => {
        setSearchText(e.target.value);
    }


    return (
        <div className="col-md-12">
            <Link to="/search-movie" >
                <h2 className="page-title">Search Movie</h2>
            </Link>
            <input type="text" value={searchText} onChange={updateSearchText} placeholder="Enter a Movie name..." />
            <button className="btn btn-primary" type="submit" onClick={search}  >Search</button>
        </div>
    );
}

const mapDispatchToProps = {
    searchMovies: MovieActions.searchMovies
}


export default connect (null, mapDispatchToProps )(SearchMovie);
import React from 'react';
import { connect } from "react-redux";
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';

//const DEFAULT_PLACEHOLDER_IMAGE =
// "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

//Consulta de Peliculas - lista
const MovieList = ({ movies }) => {


    console.log(movies)
    //  const poster = movies.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movies.Poster;
    return (

        <Grid container style={{ textAlign: 'center' }}>
                {movies && movies.map(movie =>
                            <Grid  key={movie.imdbID} container item xs={6} sm={3} style={{margin: 10}}>

                    <div style={{ border: '1px solid #000', backgroundColor: '#eff5ef', margin: '5px', padding: '10px ' }}>
                        {movie.Title}
                        <div>
                            <img
                                width="200"
                                alt={`Movie name: ${movie.Title}`}
                                src={movie.Poster === 'N/A' ? 'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg' : movie.Poster}
                            />
                        </div>
                        Year: {movie.Year}
                        <div>
                            <Link to={`/movie-detail/${movie.imdbID}`}> More </Link>
                        </div>
                        <div>
                            <button type='button' className='btn btn-info' style={{marginTop:'4px', position:'relative'}}>Add to Que Ver List</button>
                        </div> 
                    </div>
                    </Grid>

                    )}
        </Grid>

    )
}

const mapStateToProps = ({ movieReducer }) => {
    const { movieList } = movieReducer;
    return { movies: movieList }
}

export default connect(mapStateToProps, null)(MovieList);
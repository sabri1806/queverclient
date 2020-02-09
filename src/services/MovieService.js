import axios from "axios";
import  '../.env';

const API_KEY= '9c38b7d';

const getMovie = (id) => {
    return axios
      .get('http://localhost:8082/api/favorites-movies/' + id);

    //   .then(res => {
    //      console.log("Print-showMovieDetails-API-response: " + res.data);
    //     this.setState({
    //       movie: res.data
    //     })
    //   })
    //   .catch(err => {
    //     console.log("Error from ShowMovietails");
    //   })
}

 const searchMovie = textSearch => {
    return axios
    .get(`https://www.omdbapi.com/?apiKey=${API_KEY}&s=${textSearch}`)
}

const getMovieDetail = movieId => {
    return axios
    .get(`https://www.omdbapi.com/?apiKey=${API_KEY}&i=${movieId}&plot=full&r=json`)
}
export default {
    getMovie,
    searchMovie,
    getMovieDetail
}
 
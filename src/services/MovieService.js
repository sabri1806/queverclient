import axios from 'axios';

const API_KEY = '9c38b7d';
const THE_MOVIE_DB_API_KEY = '2b5628de9b99a860ded3569d24480f1d';

const getMovie = id => {
  return axios.get('https://quever-api.appspot.com/api/favorites-movies/' + id);
};

const getFavouritesMovies = () => {
  return axios.get('https://quever-api.appspot.com/api/favorites-movies');
};

const saveFavourite = ({
  moviename,
  description,
  genre,
  year,
  cast,
  email,
}) => {
  const payload = {
    moviename,
    description,
    genre,
    year,
    cast,
    email,
  };
  return axios.post(
    'https://quever-api.appspot.com/api/favorites-movies',
    payload,
  );
};
const getMovieForUpdate = id => {
  return axios.get('https://quever-api.appspot.com/api/favorites-movies/' + id);
};

const deleteFavouriteMovie = id => {
  axios.delete('http://localhost:8082/api/favorites-movies/' + id);
};

const updateMovie = (movieId, data) => {
  return axios.put(
    'https://quever-api.appspot.com/api/favorites-movies/' + movieId,
    data,
  );
};

const shareFavourites = ({ firstName, lastName, email, emailTo }) => {
  const payload = {
    firstName,
    lastName,
    email,
    email_to: emailTo,
  };

  return axios.post(
    `https://quever-api.appspot.com/api/favorites-movies/share-favourites`,
    payload,
  );
};

const searchMovie = textSearch => {
  return axios.get(
    `https://www.omdbapi.com/?apiKey=${API_KEY}&s=${textSearch}`,
  );
};

const getPopularMovies = () => {
  return axios.get(
    `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${THE_MOVIE_DB_API_KEY}`,
  );
};

const getMovieDetail = movieId => {
  return axios.get(
    `https://www.omdbapi.com/?apiKey=${API_KEY}&i=${movieId}&plot=short&r=json`,
  );
};

const saveWatchLaterMovie = (email, omDBId, poster, title) => {
  const payload = {
    email,
    omDBId,
    poster,
    title,
  };
  return axios.post(
    `https://quever-api.appspot.com/api/watch-later/add-watch-later-movie`,
    payload,
  );
};

const getWatchLaterMovies = () => {
  return axios.get(
    'https://quever-api.appspot.com/api/watch-later/all-watch-later',
  );
};

const deleteWatchLaterMovie = id => {
  return axios
    .delete(
      'https://quever-api.appspot.com/api/watch-later/delete-watch-later-movie/' +
        id,
    )
    .then(res => {
      window.location = '/watch-later';
    })
    .catch(err => {
      console.log('Error from MovieService_deleteWatchLaterMovie');
    });
};

const deleteAllWatchLaterMovie = () => {
  return axios
    .delete(
      'https://quever-api.appspot.com/api/watch-later/delete-all-watch-later-movie',
    )
    .then(res => {
      window.location = '/search-movie';
    })
    .catch(err => {
      console.log('Error from MovieService_deleteAllWatchLaterMovie');
    });
};

const rateMovieQueVer = (email, title, imdbID, rateValue) => {
  const payload = {
    email,
    title,
    imdbID,
    rateValue,
  };
  return axios.post(`https://quever-api.appspot.com/api/rate/movies`, payload);
};

const calculateRate = (imdbID, rateValue) => {
  return axios.get(`https://quever-api.appspot.com/api/rate/movies/${imdbID}`);
};

export default {
  getMovie,
  getFavouritesMovies,
  saveFavourite,
  getMovieForUpdate,
  deleteFavouriteMovie,
  updateMovie,
  shareFavourites,
  searchMovie,
  getPopularMovies,
  getMovieDetail,
  saveWatchLaterMovie,
  getWatchLaterMovies,
  deleteWatchLaterMovie,
  deleteAllWatchLaterMovie,
  rateMovieQueVer,
  calculateRate,
};

import axios from 'axios';
import '../.env';

const API_KEY = '9c38b7d';

const getMovie = id => {
  return axios.get('https://quever-api.appspot.com/api/favorites-movies/' + id);
};

const getMovieForUpdate = id => {
  return axios.get('https://quever-api.appspot.com/api/favorites-movies/' + id);
};

const searchMovie = textSearch => {
  return axios.get(
    `https://www.omdbapi.com/?apiKey=${API_KEY}&s=${textSearch}`,
  );
};

const getMovieDetail = movieId => {
  return axios.get(
    `https://www.omdbapi.com/?apiKey=${API_KEY}&i=${movieId}&plot=full&r=json`,
  );
};

const updateMovie = (movieId, data) => {
  return axios.put(
    'https://quever-api.appspot.com/api/favorites-movies/' + movieId,
    data,
  );
};

const saveWatchLaterMovie = (email, omDBId, poster) => {
  const payload = {
    email,
    omDBId,
    poster,
  };
  console.log(payload);
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

const getFavouritesMovies = () => {
  return axios.get(
    'https://quever-api.appspot.com/api/watch-later/all-watch-later',
  );
};

const deleteWatchLaterMovie = id => {
  console.log(id, 'que trae esto');
  return axios
    .delete(
      'https://quever-api.appspot.com/api/watch-later/delete-watch-later-movie/' +
        id,
    )
    .then(res => {
      window.location = '/watch-later-movie-list';
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

const rateMovieQueVer = (email, imdbID, rateValue) => {
  const payload = {
    email,
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
  getMovieForUpdate,
  searchMovie,
  getMovieDetail,
  saveWatchLaterMovie,
  getFavouritesMovies,
  getWatchLaterMovies,
  deleteWatchLaterMovie,
  deleteAllWatchLaterMovie,
  rateMovieQueVer,
  calculateRate,
  updateMovie,
};

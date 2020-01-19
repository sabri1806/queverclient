import MovieService from "../../services/MovieService"
import { createActions } from "redux-actions";

const { getMovieSuccess } = createActions({
    GET_MOVIE_SUCCESS: data => data
})

const getMovie = (id) => async dispatch => {

    try {
        const response = await MovieService.getMovie(id);
        dispatch(getMovieSuccess(response.data));

    } catch(err) {
        console.log(err);
    }
}

export default {
    getMovie,
    getMovieSuccess
}
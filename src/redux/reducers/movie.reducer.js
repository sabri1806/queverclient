import { handleActions } from "redux-actions";
import MovieActions from "../actions/movie.actions";

const initialState = {
    movie: null
}

export default handleActions({
    [MovieActions.getMovieSuccess]: (state, { payload }) => handleGetMovie(state, payload)

}, initialState);

const handleGetMovie = (state, payload) => {
    return {...state, movie: payload };
} 

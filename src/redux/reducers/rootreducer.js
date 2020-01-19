import { combineReducers } from "redux";
import movieReducer from "./movie.reducer";


const allReducers = combineReducers({
    movieReducer
});

export const rootReducer = allReducers;

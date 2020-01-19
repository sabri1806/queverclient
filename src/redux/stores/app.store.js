import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from "redux-thunk";
import { rootReducer } from './../reducers/rootreducer';

const store = createStore(rootReducer, process.env.NODE_ENV==="production" ? 
    applyMiddleware(thunkMiddleware) : 
    compose( applyMiddleware(thunkMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__()));

export default store;

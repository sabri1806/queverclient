import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import CreateFavoriteMovie from './components/CreateFavoriteMovie';
import ShowFavoritesMovieList from './components/ShowFavoritesMovieList';
import ShowMovieDetails from './components/ShowMovieDetails';
import UpdateMovieInfo from './components/UpdateMovieInfo';
import store from './redux/stores/app.store';
import SearchMoviesPage from './pages/search-movies/SearchMoviesPage';
import MovieDetail from './components/MovieDetail';
import QueVerListPage from './pages/que-ver-list/QueVerListPage';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Router>
        <div>
          <Route exact path='/' component={ShowFavoritesMovieList} />
          <Route path='/search-movie' component={SearchMoviesPage}/>
          <Route path='/movie-detail/:id' component={MovieDetail}/>
          <Route path='/create-favorite-movie' component={CreateFavoriteMovie} />
          <Route path='/edit-movie/:id' component={UpdateMovieInfo} />
          <Route path='/show-movie/:id' component={ShowMovieDetails} />
          <Route path='/quever-list' component={QueVerListPage}/>
        </div>
      </Router>
      </Provider>

    );
  }
}

export default App;

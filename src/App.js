import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import CreateFavoriteMovie from './components/CreateFavoriteMovie';
import ShowFavoritesMovieList from './components/ShowFavoritesMovieList';
import ShowMovieDetails from './components/ShowMovieDetails';
import UpdateFavoritesMovieInfo from './components/UpdateFavoritesMovieInfo';
import store from './redux/stores/app.store';
import SearchMoviesPage from './pages/search-movies/SearchMoviesPage';
import MovieDetail from './components/MovieDetail';
import Home from './components/Home';
import ShowWatchLaterMovieList from './components/ShowWatchLaterMovieList';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Route path={process.env.PUBLIC_URL} components={Login}></Route>
          <Route exact path='/home' component={() => <Home />} />
          <Route path='/show-favourite' component={ShowFavoritesMovieList} />
          <Route
            exact
            path='/watch-later-movie-list'
            component={ShowWatchLaterMovieList}
          />
          <Route
            path='/login'
            component={() => (
              <Login
                signInWithGoogle={this.props.signInWithGoogle}
                user={this.props.user}
              />
            )}
          />
          <Route
            path='/search-movie'
            component={() => <SearchMoviesPage signOut={this.props.signOut} />}
          />
          <Route path='/movie-detail/:id' component={MovieDetail} />
          <Route
            path='/create-favorite-movie'
            component={() => (
              <CreateFavoriteMovie signOut={this.props.signOut} />
            )}
          />
          <Route path='/edit-movie/:id' component={UpdateFavoritesMovieInfo} />
          <Route path='/show-movie/:id' component={ShowMovieDetails} />
        </Router>
      </Provider>
    );
  }
}

export default App;

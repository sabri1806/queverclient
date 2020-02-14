import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
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
            <Route
              exact
              path='/show-favourite'
              component={() => <ShowFavoritesMovieList />}
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
              component={() =>
                this.props.user ? (
                  <SearchMoviesPage signOut={this.props.signOut} />
                ) : null
              }
            />
            <Route
              path='/movie-detail/:id'
              component={() =>
                this.props.user ? (
                  <MovieDetail signOut={this.props.signOut} />
                ) : null
              }
            />
            <Route
              path='/create-favorite-movie'
              component={() =>
                this.props.user ? (
                  <CreateFavoriteMovie signOut={this.props.signOut} />
                ) : null
              }
            />
            <Route
              path='/edit-movie/:id'
              component={() =>
                this.props.user ? (
                  <UpdateMovieInfo signOut={this.props.signOut} />
                ) : null
              }
            />
            <Route
              path='/show-movie/:id'
              component={() =>
                this.props.user ? (
                  <ShowMovieDetails signOut={this.props.signOut} />
                ) : null
              }
            />
            <Route
              path='/quever-list'
              component={() =>
                this.props.user ? (
                  <QueVerListPage signOut={this.props.signOut} />
                ) : null
              }
            />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;

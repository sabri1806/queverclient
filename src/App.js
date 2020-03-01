import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/login/Login';
// import Login from './components/Login';
import CreateFavoriteMovie from './pages/favourites/components/create-favourite-movie/CreateFavoriteMovie';
import ShowMovieDetails from './components/movie-detail/ShowMovieDetails';
// import UpdateFavoritesMovieInfo from './components/UpdateFavoritesMovieInfo';
import store from './redux/stores/app.store';
import MovieDetail from './components/movie-detail/MovieDetail';
// import Home from './components/Home';
import ShowFavoritesMovieList from './pages/favourites/ShowFavoritesMovieList';
import ShowWatchLaterMovieList from './pages/watch-later/ShowWatchLaterMovieList';
import SearchMoviesPage from './pages/search-movies/SearchMoviesPage';
import Home from './pages/home/Home';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Route path='/' exact component={Home} />
          <Route path='/login' exact component={Login} />
          <Route
            exact
            path='/watch-later-movie-list'
            component={ShowWatchLaterMovieList}
          />
          <Route path='/show-favourite' component={ShowFavoritesMovieList} />
          <Route path='/search-movie' component={SearchMoviesPage} />
          <Route
            path='/create-favorite-movie'
            component={CreateFavoriteMovie}
          />
          <Route path='/show-movie/:id' component={ShowMovieDetails} />
          <Route path='/movie-detail/:id' component={MovieDetail} />
        </Router>
      </Provider>
      //   <Router>
      //     <Route path={process.env.PUBLIC_URL} components={Login}></Route>
      //     <Route exact path='/home' component={() => <Home />} />
      //     <Route
      //       path='/login'
      //       component={() => (
      //         <Login
      //           signInWithGoogle={this.props.signInWithGoogle}
      //           user={this.props.user}
      //         />
      //       )}
      //     />

      //     <Route path='/edit-movie/:id' component={UpdateFavoritesMovieInfo} />
      //   </Router>
    );
  }
}

export default App;

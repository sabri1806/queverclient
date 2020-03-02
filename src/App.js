import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import './assets/styles/styles.css';
import './assets/styles/fonts.css';
import Login from './pages/login/Login';
import { IntlProvider } from 'react-intl';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
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
import messages_es from './translations/es.json';
import messages_en from './translations/en.json';
import Home from './pages/home/Home';

const App = () => {
  const messages = {
    es: messages_es,
    en: messages_en,
  };

  const language =
    localStorage.getItem('language') || navigator.language.substring(0, 2);

  const theme = createMuiTheme({
    typography: {
      fontFamily: ['"avenir_next"', 'Georgia', 'sans-serif'].join(','),
      useNextVariants: true,
    },
  });

  return (
    <Provider store={store}>
      <IntlProvider locale={language} messages={messages[language]}>
        <CssBaseline>
          <MuiThemeProvider theme={theme}>
            <Router>
              <Route path='/' exact component={Home} />
              <Route path='/login' exact component={Login} />
              <Route
                exact
                path='/watch-later-movie-list'
                component={ShowWatchLaterMovieList}
              />
              <Route
                path='/show-favourite'
                component={ShowFavoritesMovieList}
              />
              <Route path='/search-movie' component={SearchMoviesPage} />
              <Route
                path='/create-favorite-movie'
                component={CreateFavoriteMovie}
              />
              <Route path='/show-movie/:id' component={ShowMovieDetails} />
              <Route path='/movie-detail/:id' component={MovieDetail} />
            </Router>
          </MuiThemeProvider>
        </CssBaseline>
      </IntlProvider>
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
};

export default App;

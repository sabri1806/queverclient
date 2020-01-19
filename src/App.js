import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import CreateMovie from './components/CreateMovie';
import ShowMovieList from './components/ShowMovieList';
import ShowMovieDetails from './components/ShowMovieDetails';
import UpdateMovieInfo from './components/UpdateMovieInfo';
import store from './redux/stores/app.store';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Router>
        <div>
          <Route exact path='/' component={ShowMovieList} />
          <Route path='/create-movie' component={CreateMovie} />
          <Route path='/edit-movie/:id' component={UpdateMovieInfo} />
          <Route path='/show-movie/:id' component={ShowMovieDetails} />
        </div>
      </Router>
      </Provider>

    );
  }
}

export default App;

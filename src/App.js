import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import CreateMovie from './components/CreateMovie';
import ShowMovieList from './components/ShowMovieList';
import ShowMovieDetails from './components/ShowMovieDetails';
import UpdateMovieInfo from './components/UpdateMovieInfo';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={ShowMovieList} />
          <Route path='/create-movie' component={CreateMovie} />
          <Route path='/edit-movie/:id' component={UpdateMovieInfo} />
          <Route path='/show-movie/:id' component={ShowMovieDetails} />
        </div>
      </Router>
    );
  }
}

export default App;

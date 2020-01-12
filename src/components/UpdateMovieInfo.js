import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

class UpdateMovieInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moviename: '',
      description: '',
      genre: '',
      year: '',
      cast: ''
    };
  }

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get('http://localhost:8082/api/movies/'+this.props.match.params.id)
      .then(res => {
        // this.setState({...this.state, movie: res.data})
        this.setState({
          moviename: res.data.moviename,
          description: res.data.description,
          genre: res.data.genre,
          year: res.data.year,
          cast: res.data.cast
        })
      })
      .catch(err => {
        console.log("Error from UpdateMovieInfo");
      })
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
      //_id: this.props.match.params.id,
      moviename: this.state.moviename,
      description: this.state.description,
      genre: this.state.genre,
      year: this.state.year,
      cast: this.state.cast
    };

    axios
      .put('http://localhost:8082/api/movies/'+this.props.match.params.id, data)
      .then(res => {
        this.props.history.push('/show-movie/'+this.props.match.params.id);
      })
      .catch(err => {
        console.log("Error in UpdateMovieInfo!");
      })
  };


  render() {
    return (
      <div className="UpdateMovieInfo">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Movie List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Edit Movie</h1>
              <p className="lead text-center">
                  Update Movie's Info
              </p>
            </div>
          </div>

          <div className="col-md-8 m-auto">
          <form noValidate onSubmit={this.onSubmit}>
            <div className='form-group'>
              <label htmlFor="moviename">Moviename</label>
              <input
                type='text'
                placeholder='Name of the Movie'
                name='moviename'
                className='form-control'
                value={this.state.moviename}
                onChange={this.onChange}
              />
            </div>
            <br />

            <div className='form-group'>
            <label htmlFor="description">Description</label>
              <input
                type='text'
                placeholder='Description'
                name='description'
                className='form-control'
                value={this.state.description}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="genre">Genre</label>
              <input
                type='text'
                placeholder='Genre'
                name='genre'
                className='form-control'
                value={this.state.genre}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="year">Year</label>
              <input
                type='text'
                placeholder='Year of the movie'
                name='year'
                className='form-control'
                value={this.state.year}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="cast">Cast</label>
              <input
                type='text'
                placeholder='Cast'
                name='cast'
                className='form-control'
                value={this.state.cast}
                onChange={this.onChange}
              />
            </div>
            <button type="submit" className="btn btn-outline-info btn-lg btn-block">Update Movie</button>
            </form>
          </div>

        </div>
      </div>
    );
  }
}

export default UpdateMovieInfo;
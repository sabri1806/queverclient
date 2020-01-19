import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

class CreateMovie extends Component {
  constructor() {
    super();
    this.state = {
      moviename: '',
      description: '',
      genre: '',
      year: '',
      cast: ''
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
      moviename: this.state.moviename,
      description: this.state.description,
      genre: this.state.genre,
      year: this.state.year,
      cast: this.state.cast,
    };

    axios
      .post('http://localhost:8082/api/movies', data)
      .then(res => {
        console.log(data + ">> esto viene en data");
        this.setState({
          moviename: '',
          description: '',
          genre: '',
          year: '',
          cast: ''
        })
        this.props.history.push('/');
      })
      .catch(err => {
        console.log("Error in CreateMovie!");
      })
  };

  render() {
    return (
      <div className="CreateMovie">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                Show Movie List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Add Movie</h1>
              <p className="lead text-center">
                Create new movie
              </p>
              
              <form noValidate onSubmit={this.onSubmit}>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Title of the Movie'
                    name='moviename'
                    className='form-control'
                    value={this.state.name}
                    onChange={this.onChange}
                  />
                </div>
                <br />

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Describe this movie'
                    name='description'
                    className='form-control'
                    value={this.state.description}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
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
                  <input
                    type='text'
                    placeholder='Year'
                    name='year'
                    className='form-control'
                    value={this.state.year}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Cast'
                    name='cast'
                    className='form-control'
                    value={this.state.cast}
                    onChange={this.onChange}
                  />
                </div>
                <input
                  type="submit"
                  className="btn btn-outline-warning btn-block mt-4"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateMovie;
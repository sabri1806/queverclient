import React from 'react';
// import IconButton from '@material-ui/core/IconButton';

const RateMovie = ({ movie, rateMovie }) => {
  return (
    <div>
      <div style={{ padding: '5px' }}>
        <button className='btn btn-primary' onClick={() => rateMovie(movie, 1)}>
          1
        </button>
        <button className='btn btn-primary' onClick={() => rateMovie(movie, 2)}>
          2
        </button>
        <button className='btn btn-primary' onClick={() => rateMovie(movie, 3)}>
          3
        </button>
        <button className='btn btn-primary' onClick={() => rateMovie(movie, 4)}>
          4
        </button>
        <button className='btn btn-primary' onClick={() => rateMovie(movie, 5)}>
          5
        </button>
      </div>
    </div>
  );
};

export default RateMovie;

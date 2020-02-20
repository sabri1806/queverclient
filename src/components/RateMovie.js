import React from 'react';

const RateMovie = ({ movie, rateMovie }) => {
  return (
    <div>
      <div>
        <button className='btn btn-primary' onClick={rateMovie(movie)}>
          Rate it
        </button>
      </div>
    </div>
  );
};

export default RateMovie;

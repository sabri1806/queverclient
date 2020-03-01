import React from 'react';
// import IconButton from '@material-ui/core/IconButton';

const RateMovie = ({ movie, rateMovie }) => {
  return (
    <div>
      <div style={{ padding: '5px' }}>
        <p>Rate It:</p>
        <button className='btn btn-primary' onClick={() => rateMovie(1)}>
          1
        </button>
        <button className='btn btn-primary' onClick={() => rateMovie(2)}>
          2
        </button>
        <button className='btn btn-primary' onClick={() => rateMovie(3)}>
          3
        </button>
        <button className='btn btn-primary' onClick={() => rateMovie(4)}>
          4
        </button>
        <button className='btn btn-primary' onClick={() => rateMovie(5)}>
          5
        </button>
      </div>
    </div>
  );
};

export default RateMovie;

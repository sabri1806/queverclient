import React from 'react';
import { IconButton, Tooltip } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import { useIntl } from 'react-intl';

const RateMovie = ({ movie, rateMovie }) => {
  const { formatMessage } = useIntl();
  return (
    <div>
      <div style={{ padding: '5px' }}>
        <p>{formatMessage({ id: 'movieDetailPage.rateMovie' })}</p>
        <Tooltip title={1}>
          <IconButton
            color='primary'
            aria-label='add to shopping cart'
            onClick={() => rateMovie(1)}
          >
            <StarIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title={2}>
          <IconButton
            color='primary'
            aria-label='add to shopping cart'
            onClick={() => rateMovie(2)}
          >
            <StarIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title={3}>
          <IconButton
            color='primary'
            aria-label='add to shopping cart'
            onClick={() => rateMovie(3)}
          >
            <StarIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title={4}>
          <IconButton
            color='primary'
            aria-label='add to shopping cart'
            onClick={() => rateMovie(4)}
          >
            <StarIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title={5}>
          <IconButton
            color='primary'
            aria-label='add to shopping cart'
            onClick={() => rateMovie(5)}
          >
            <StarIcon />
          </IconButton>
        </Tooltip>
        {/* <button className='btn btn-primary' onClick={() => rateMovie(1)}>
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
        </button> */}
      </div>
    </div>
  );
};

export default RateMovie;

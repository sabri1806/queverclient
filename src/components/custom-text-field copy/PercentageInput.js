import PropTypes from 'prop-types';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MaskedInput from '../masked-input/MaskedInput';
import classNames from 'classnames';

const useStyles = makeStyles(theme => ({
  root: {
    border: 'solid 1px #e6ebf1',
    color: '#1f2532',
    fontFamily: 'inherit',
    fontSize: 15,
    padding: '14px 10px',
    textAlign: 'center',
    '&::placeholder': {
      color: '#9aa9b9',
      opacity: 1,
    },
    '&:-ms-input-placeholder': {
      color: '#9aa9b9',
    },
    '&::-ms-input-placeholder': {
      color: '#9aa9b9',
    },
  },
  fullWidth: {
    width: '100%',
  },
}));

const PercentageInput = ({
  value,
  min = 0,
  max = 100,
  onChange,
  precision = 0,
  fullWidth,
  ...props
}) => {
  const classes = useStyles();

  const handleChange = event => {
    let percentage = event.target.value;

    percentage = parseFloat(percentage);

    if (percentage <= max && percentage >= min) {
      onChange(percentage);
    } else {
      onChange(value);
    }
  };

  return (
    <MaskedInput
      placeholder={'0%'}
      value={value}
      onChangeEvent={handleChange}
      className={classNames(classes.root, fullWidth && classes.fullWidth)}
      suffix={'%'}
      precision={precision}
      {...props}
    />
  );
};

PercentageInput.propTypes = {
  maxLength: PropTypes.number,
  emptyAlert: PropTypes.bool,
};

export default PercentageInput;

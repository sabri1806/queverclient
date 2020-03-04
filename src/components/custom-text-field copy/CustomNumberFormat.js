import React from 'react';
import { makeStyles } from '@material-ui/core';
import NumberFormat from 'react-number-format';

const useStyles = makeStyles(() => ({
  root: {
    border: 'solid 1px #e6ebf1',
    color: '#1f2532',
    fontFamily: 'inherit',
    fontSize: 15,
    padding: '14px 10px',
    textAlign: 'center',
    width: '100%',
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
}));

const CustomNumberFormat = ({ ...props }) => {
  const classes = useStyles();
  return <NumberFormat className={classes.root} {...props} />;
};

export default CustomNumberFormat;

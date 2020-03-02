import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import { InputAdornment, TextField, Tooltip } from '@material-ui/core';
import InformationIcon from '../icons/Information';

const useStyles = makeStyles(theme => ({
  textFieldLabel: {
    color: '#9aa9b9',
    fontSize: 13,
    fontWeight: 'normal',
    marginTop: 0,
    transform: 'none',
  },
  textFieldInput: {
    border: 'solid 1px #e6ebf1',
    color: '#1f2532',
    fontSize: 15,
    padding: '14px 10px',
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
    '&::-webkit-inner-spin-button': {
      '-webkit-appearance': 'none',
      margin: 0,
    },
    '&::-webkit-outer-spin-button': {
      '-webkit-appearance': 'none',
      margin: 0,
    },
  },
  disabled: {
    background: '#f9fbfd',
    color: '#9aa9b9',
  },
  inputWithLabel: {
    marginTop: 9,
  },
  emptyAlert: {
    borderColor: '#ffaa00',
  },
  textAreaRoot: {
    padding: 0,
    '& > div': {
      display: 'inline-flex',
    },
  },
  tooltipIconEnd: {
    cursor: 'help',
    position: 'absolute',
    right: 10,
    top: 30,
  },
  tooltipRoot: {
    marginTop: -5,
    opacity: 1,
  },
  tooltip: {
    backgroundColor: '#424766',
    boxShadow: '0 24px 24px 0 rgba(0, 0, 0, 0.3)',
    fontSize: 13,
    fontWeight: 'normal',
    maxWidth: 200,
    padding: '12px 16px',
    '&:after': {
      border: '6px solid transparent',
      borderBottomColor: '#424766',
      content: "''",
      left: '50%',
      marginLeft: -5,
      marginTop: 2,
      position: 'absolute',
      top: 0,
    },
  },
}));

const CustomTextField = ({
  maxLength,
  tooltip,
  emptyAlert,
  disabled,
  onBlur,
  onKeyUp,
  ...textFieldProps
}) => {
  const classes = useStyles();

  let endAdornment = tooltip ? (
    <InputAdornment
      position='end'
      classes={{
        positionEnd: classes.tooltipIconEnd,
      }}
    >
      <Tooltip
        title={tooltip}
        placement={'bottom'}
        classes={{
          popper: classes.tooltipRoot,
          tooltip: classes.tooltip,
        }}
      >
        <InformationIcon />
      </Tooltip>
    </InputAdornment>
  ) : null;

  return (
    <TextField
      disabled={disabled}
      {...textFieldProps}
      margin='none'
      InputLabelProps={{
        disableAnimation: true,
        focused: false,
        shrink: true,
        classes: {
          root: classes.textFieldLabel,
        },
      }}
      InputProps={{
        disableUnderline: true,
        classes: {
          input: classNames(
            classes.textFieldInput,
            textFieldProps.label && classes.inputWithLabel,
            disabled && classes.disabled,
            emptyAlert && classes.emptyAlert,
          ),
          multiline: classes.textAreaRoot,
        },
        inputProps: {
          maxLength: maxLength,
          onBlur: onBlur,
          onKeyUp: onKeyUp,
        },
        endAdornment: endAdornment,
      }}
    />
  );
};

CustomTextField.propTypes = {
  maxLength: PropTypes.number,
  emptyAlert: PropTypes.bool,
};

export default CustomTextField;

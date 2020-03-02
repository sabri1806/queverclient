import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import MaskedInput from '../masked-input/MaskedInput';
import {
  getMonetarySign,
  getThousandSeparator,
  getDecimalSeparator,
  getPrecision,
  getPlaceholder,
} from '../../utilities/CurrencyUtils';
import { countryCode } from '../../constants/CountryCode';

const useStyles = makeStyles(theme => ({
  root: {
    '& label': {
      color: '#9aa9b9',
      fontSize: 13,
    },
    '& input': {
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
    '& label + input': {
      marginTop: 5,
    },
  },
  fullWidth: {
    width: '100%',
  },
  emptyAlert: {
    '& input': {
      borderColor: '#ffaa00',
    },
  },
}));

const CustomCurrencyInput = ({
  country = countryCode.COLOMBIA,
  label,
  placeholder,
  value,
  disabled,
  onChange,
  fullWidth,
  maxLength,
  emptyAlert,
}) => {
  const classes = useStyles();

  const handleChange = event => {
    let value = event.target.value;

    value = value
      .replace(getMonetarySign(country), '')
      .split(getThousandSeparator(country))
      .join('')
      .replace(getDecimalSeparator(country), '.');

    onChange(value);
  };

  return (
    <div className={classNames(classes.root, emptyAlert && classes.emptyAlert)}>
      {label && <label>{label}</label>}
      <MaskedInput
        value={value || value === 0 ? Number(value) : null}
        placeholder={placeholder || getPlaceholder(country)}
        onChangeEvent={handleChange}
        decimalSeparator={getDecimalSeparator(country)}
        thousandSeparator={getThousandSeparator(country)}
        prefix={getMonetarySign(country)}
        precision={getPrecision(country)}
        disabled={disabled}
        maxLength={getMonetarySign(country).length + maxLength}
        className={classNames(fullWidth && classes.fullWidth)}
      />
    </div>
  );
};

CustomCurrencyInput.propTypes = {
  country: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  fullWidth: PropTypes.bool,
  maxLength: PropTypes.number,
  emptyAlert: PropTypes.bool,
};

export default CustomCurrencyInput;

import React, { useState } from 'react';
import CustomNumberFormat from './CustomNumberFormat';

const PercentageNumberInput = ({
  onChange,
  minVal,
  maxVal,
  precision,
  ...props
}) => {
  const [currentValue, setCurrentValue] = useState('');

  const valueChanged = values => {
    const { floatValue } = values;
    if (minVal && floatValue < minVal) {
      setCurrentValue(null);
      return;
    } else if (floatValue > maxVal) {
      setCurrentValue(currentValue + '.' + (floatValue % 10));
      return;
    } else {
      setCurrentValue(floatValue);
      onChange(floatValue || 0);
    }
  };

  return (
    <CustomNumberFormat
      {...props}
      value={currentValue}
      onValueChange={valueChanged}
      decimalScale={precision}
      suffix={'%'}
    />
  );
};

export default PercentageNumberInput;

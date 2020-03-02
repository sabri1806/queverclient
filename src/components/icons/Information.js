import React, { Component } from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

class Information extends Component {
  render() {
    const { nativeColor, ...svgProps } = this.props;

    const color = nativeColor || '#9AA9B9';

    return (
      <SvgIcon {...svgProps}>
        <g fill='none' fillRule='evenodd'>
          <path
            stroke={color}
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M3 12a9 9 0 0 1 9-9 9 9 0 1 1-9 9z'
          />
          <path
            fill={color}
            fillRule='nonzero'
            d='M10.3 10.941V10.5c.167-.059.367-.118.6-.176.267-.06.533-.118.8-.148.267-.058.567-.088.833-.117.267-.03.534-.059.734-.059l.266.147-1.366 5.735h1.066v.47c-.133.09-.3.148-.466.236-.167.06-.367.147-.567.206-.2.059-.4.088-.6.118-.2.03-.4.059-.567.059-.4 0-.633-.06-.8-.206-.133-.118-.233-.265-.233-.412 0-.177 0-.353.033-.53.034-.176.067-.352.134-.558l1.033-4.147-.9-.177z'
          />
          <circle cx='13' cy='8' r='1' fill={color} fillRule='nonzero' />
        </g>
      </SvgIcon>
    );
  }
}

export default Information;

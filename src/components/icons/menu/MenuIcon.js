import React, { Component } from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
import COLORS from '../../../styles/Colors';

class MenuIcon extends Component {
  getStroke() {
    return this.props.selected ? `${COLORS.MAIN_COLOR}` : '#9AA9B9';
  }

  render() {
    const { d } = this.props;

    return (
      <SvgIcon>
        <g fill='none' fillRule='evenodd'>
          <path d='M0 0h24v24H0z' />
          <path
            stroke={this.getStroke()}
            strokeLinecap='round'
            strokeLinejoin='round'
            d={d}
          />
        </g>
      </SvgIcon>
    );
  }
}

export default MenuIcon;

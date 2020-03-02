import React, { Component } from 'react';
import MenuIcon from './MenuIcon';

class HomeIcon extends Component {
  d =
    'M18.188 8.696L17.063 21H6.938L5.813 8.705 3 11.298 12 3l9 8.298-2.813-2.602zM14.25 12.48c0-1.264-1.007-2.289-2.25-2.289s-2.25 1.025-2.25 2.29c0 1.264 1.007 2.289 2.25 2.289s2.25-1.025 2.25-2.29z';

  render() {
    const { selected } = this.props;

    return <MenuIcon d={this.d} selected={selected} />;
  }
}

export default HomeIcon;

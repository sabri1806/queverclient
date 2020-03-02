import React, { Component } from 'react';
import MenuIcon from './MenuIcon';

class WatchLaterIcon extends Component {
  d =
    'M14.372 20.723H21h-6.628zM3 9.646V3h6.628v6.646H3zm0 11.077v-6.646h6.628v6.646H3zM14.372 3H21h-6.628zm0 5.908H21h-6.628zm0 5.907H21h-6.628z';

  render() {
    const { selected } = this.props;

    return <MenuIcon d={this.d} selected={selected} />;
  }
}

export default WatchLaterIcon;

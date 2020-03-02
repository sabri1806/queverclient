import React, { Component } from 'react';
import MenuIcon from './MenuIcon';

class LogoutIcon extends Component {
  d =
    'M9.944 5.738V4H21v15H9.944v-1.868m-3.737-2.417L3 11.452l3.207-3.263m9.546 3.31H3M15.753 9.87v3.26';

  render() {
    const { selected } = this.props;

    return <MenuIcon d={this.d} selected={selected} />;
  }
}

export default LogoutIcon;

import React, { Component } from 'react';
import MenuIcon from './MenuIcon';

class HomeIcon extends Component {
  d =
    'M16.134 16.134L21 21m-2.797-10.399a7.601 7.601 0 11-15.203 0 7.601 7.601 0 0115.203 0z';

  render() {
    const { selected } = this.props;

    return <MenuIcon d={this.d} selected={selected} />;
  }
}

export default HomeIcon;

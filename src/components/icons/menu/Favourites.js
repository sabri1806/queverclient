import React, { Component } from 'react';
import MenuIcon from './MenuIcon';

class FavouritesIcons extends Component {
  d =
    'M13.476 3l1.777.555c.917.286 1.46 1.207 1.255 2.126l-.79 3.268h3.752c.905 0 1.612.763 1.522 1.643l-.825 8.062c-.078.764-.736 1.346-1.522 1.346H10.98V8.949L13.476 3zm-6.172 7.158v8.633H3v-8.633h4.304z';

  render() {
    const { selected } = this.props;

    return <MenuIcon d={this.d} selected={selected} />;
  }
}

export default FavouritesIcons;

import React from 'react';
import HomeIcon from '../icons/menu/HomeIcon';
import SearchIcon from '../icons/menu/SearchIcon';
import WatchLaterIcon from '../icons/menu/WatchLaterIcon';
import ReviewsIcons from '../icons/menu/Favourites';
import LogoutIcon from '../icons/menu/LogoutIcon';

export default {
  items: [
    {
      id: 'home',
      label: 'menu.home',
      path: '/',
      icon: <HomeIcon />,
    },
    {
      id: 'search',
      label: 'menu.search',
      path: '/search-movie',
      icon: <SearchIcon />,
    },
    {
      id: 'watch-later',
      label: 'menu.watchLater',
      path: '/watch-later',
      icon: <WatchLaterIcon />,
    },
    {
      id: 'favourites',
      label: 'menu.favourites',
      path: '/favourite-movies',
      icon: <ReviewsIcons />,
    },
    {
      id: 'close',
      label: 'menu.logout',
      action: 'openLogoutConfirmation',
      icon: <LogoutIcon />,
    },
  ],
};

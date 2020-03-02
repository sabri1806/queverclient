import React from 'react';
import HomeIcon from '../icons/menu/HomeIcon';
import SearchIcon from '../icons/menu/SearchIcon';
// import RestaurantIcon from '../icons/menu/RestaurantIcon';
// import StatisticsIcon from '../icons/menu/StatisticsIcon';
// import ConnectivityIcon from '../icons/menu/ConnectivityIcon';
// import PaymentsIcon from '../icons/menu/PaymentsIcon';
// import HelpCenterIcon from '../icons/menu/HelpCenterIcon';
// import StoresInformationIcon from '../icons/menu/StoresInformationIcon';
// import NotificationsIcon from '../icons/menu/NotificationsIcon';
// import LogoutIcon from '../icons/menu/LogoutIcon';
// import Frubana from '../icons/menu/Frubana';
// import ScheduleIcon from '../icons/menu/ScheduleIcon';
// import InformationIcon from '../icons/menu/InformationIcon';
// import BellsIcons from '../icons/menu/BellsIcons';
// import ReviewsIcons from '../icons/menu/ReviewsIcons';
// import DigitalMarketingIcon from '../icons/menu/DigitalMarketingIcon';

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
  ],
};

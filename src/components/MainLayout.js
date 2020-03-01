import React from 'react';
// import { withRouter } from 'react-router-dom';
import AppBar from './AppBar';

const MainLayout = ({ children }) => {
  // const user = JSON.parse(localStorage.getItem('user'));
  console.log('main layout');
  // if (!user) {
  //   window.location = '/login';
  // }

  // const signOut = () => {
  //   localStorage.removeItem('user');
  //   window.location = '/login';
  // };

  return (
    <div>
      <AppBar userName={'user.displayName'} signOut={() => {}} />
      {children}
    </div>
  );
};

// export default withRouter(MainLayout);
export default MainLayout;

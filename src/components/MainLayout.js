import React from 'react';
import { withRouter } from 'react-router-dom';
import AppBar from './AppBar';

const MainLayout = ({ children, history }) => {
  const user = JSON.parse(localStorage.getItem('user'));
  //console.log(history);

  if (!user) {
    //history.push('/login');
    window.location = '/login';
  }

  const signOut = () => {
    localStorage.removeItem('user');
    window.location = '/login';
  };

  return (
    <div>
      <AppBar userName={user.displayName} signOut={signOut} />
      {children}
    </div>
  );
};

export default withRouter(MainLayout);

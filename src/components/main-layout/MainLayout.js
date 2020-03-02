import React from 'react';
// import { withRouter } from 'react-router-dom';
import useStyles from './MainLayout.styles';
import SideMenu from '../side-menu/SideMenu';
import { AppBar } from '@material-ui/core';

const MainLayout = ({ children, history }) => {
  const classes = useStyles();
  // const user = JSON.parse(localStorage.getItem('user'));
  console.log('history', history);
  // if (!user) {
  //   window.location = '/login';
  // }

  // const signOut = () => {
  //   localStorage.removeItem('user');
  //   window.location = '/login';
  // };

  return (
    <div className={classes.root}>
      <AppBar
        position='absolute'
        classes={{
          root: classes.appBarRoot,
        }}
      >
        puto
      </AppBar>
      <SideMenu
        open={true}
        user={{}}
        history={history}
        // onClose={this.closeSideMenu}
      />
      <main className={classes.content}>{children}</main>
    </div>
  );
};

// export default withRouter(MainLayout);
export default MainLayout;

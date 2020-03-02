import React, { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';

// import { withRouter } from 'react-router-dom';
import useStyles from './MainLayout.styles';
import SideMenu from '../side-menu/SideMenu';
import { AppBar, Hidden, Toolbar, IconButton } from '@material-ui/core';

const MainLayout = ({ actionBtn, children, history, title, subtitle }) => {
  const [open, setOpen] = useState(false);
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

  const openSideMenu = () => {
    setOpen(true);
  };

  const closeSideMenu = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <AppBar
        position='absolute'
        classes={{
          root: classes.appBarRoot,
        }}
      ></AppBar>
      <SideMenu
        open={open}
        user={{}}
        history={history}
        onClose={closeSideMenu}
      />
      <main className={classes.content}>
        <Hidden mdUp>
          <Toolbar
            disableGutters={true}
            classes={{
              root: classes.mobileToolbarRoot,
            }}
          >
            <IconButton
              color='inherit'
              aria-label='open drawer'
              onClick={openSideMenu}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            {title && <h3 className={classes.sectionTitle}>{title}</h3>}
          </Toolbar>
        </Hidden>
        <div className={classes.sectionHeader}></div>
        <div className={classes.sectionContent}>
          <Hidden only={'xs'}>
            <div className={classes.titleWrapper}>
              <div>
                {title && <h3 className={classes.sectionTitle}>{title}</h3>}
                {subtitle && (
                  <div className={classes.sectionSubtitle}>{subtitle}</div>
                )}
              </div>
              {actionBtn && <div>{actionBtn}</div>}
            </div>
          </Hidden>
          {children}
        </div>
      </main>
    </div>
  );
};

// export default withRouter(MainLayout);
export default MainLayout;

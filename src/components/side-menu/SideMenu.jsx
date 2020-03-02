import React from 'react';
import {
  Drawer,
  AppBar,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
} from '@material-ui/core';
import { useIntl } from 'react-intl';

import useStyles from './SideMenu.styles';
import classNames from 'classnames';
import MenuItems from './SideMenuItems';
import SpainFlag from '../../assets/images/flags/es.svg';
import BrazilFlag from '../../assets/images/flags/en.svg';

const SideMenu = ({ history, open }) => {
  const classes = useStyles();
  const { formatMessage } = useIntl();

  const drawerProps =
    window.innerWidth >= 600
      ? {
          variant: 'permanent',
          classes: {
            paper: classNames(
              classes.drawerPaper,
              !open && classes.drawerPaperClose,
            ),
          },
        }
      : {
          onClose: this.props.onClose,
          classes: {
            paper: classes.drawerPaperMobile,
          },
        };

  const changeLanguage = lang => {
    localStorage.setItem('language', lang);
    window.location.reload();
  };

  const navigateTo = path => {
    history.push(path);
  };

  const currentRoute = history ? history.location.pathname : '/';

  const getComponent = () => {
    const user = { nickname: 'Sabrina Lucero' };

    const getMenuItem = (item, isSubmenu = false) => {
      let onClick = null;
      let itemClasses = [classes.menuItem];
      let itemTextClasses = [classes.menuItemText];
      let iconSelected = false;

      if (item.children) {
        onClick = () =>
          this.setState({ [item.id + 'Open']: !this.state[item.id + 'Open'] });

        const selectedChild = item.children.filter(child => {
          return child.path === currentRoute;
        });

        if (selectedChild.length > 0) {
          itemClasses.push(classes.selectedMenuItem);
          itemTextClasses.push(classes.selectedMenuItemText);
          iconSelected = true;
        }
      } else if (item.action) {
        onClick = this[item.action];
      } else {
        onClick = () => navigateTo(item.path);

        if (isSubmenu) itemClasses.push(classes.subMenuItem);
        if (item.path === currentRoute) {
          if (!isSubmenu) itemClasses.push(classes.selectedMenuItem);
          itemTextClasses.push(
            isSubmenu
              ? classes.selectedSubMenuItemText
              : classes.selectedMenuItemText,
          );
          iconSelected = true;
        }
      }

      return (
        <ListItem
          button
          onClick={onClick}
          classes={{
            root: itemClasses.join(' '),
          }}
        >
          {item.icon && (
            <ListItemIcon>
              {React.cloneElement(item.icon, { selected: iconSelected })}
            </ListItemIcon>
          )}
          <ListItemText
            primary={formatMessage({ id: item.label })}
            classes={{
              root: classes.menuItemTextRoot,
              primary: itemTextClasses.join(' '),
            }}
          />
        </ListItem>
      );
    };

    return (
      <div>
        <div className={classes.userInfo}>
          <Avatar
            color={'#ff7075'}
            src={user && user.picture}
            className={classes.avatar}
          />
          <span className={classes.userName}>{user && user['nickname']}</span>
        </div>
        {MenuItems.items.map((item, index) => {
          return (
            <div key={index}>
              {getMenuItem(item)}
              {/* {item.children && item.children.length > 0 && (
                <Collapse
                  in={this.state[item.id + 'Open']}
                  timeout='auto'
                  unmountOnExit
                >
                  {item.children.map((child, childIndex) => {
                    return (
                      <div key={childIndex}>{getMenuItem(child, true)}</div>
                    );
                  })}
                </Collapse>
              )} */}
            </div>
          );
        })}
        <div className={classes.languageSelector}>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={() => changeLanguage('es')}
            classes={{
              root: classes.flagButtonRoot,
            }}
          >
            <img src={SpainFlag} alt='es' className={classes.flagButtonIcon} />
          </IconButton>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={() => changeLanguage('en')}
            classes={{
              root: classes.flagButtonRoot,
            }}
          >
            <img src={BrazilFlag} alt='pt' className={classes.flagButtonIcon} />
          </IconButton>
          <div className={classes.version}>
            <p>V 1.2.35</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Drawer anchor='left' open={open} {...drawerProps}>
      <AppBar
        position='absolute'
        classes={{
          root: classes.appBarRoot,
        }}
        children={''}
      />
      {getComponent()}
      {/* {dialog} */}
    </Drawer>
  );
};

export default SideMenu;

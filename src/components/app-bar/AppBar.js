import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  linkMenu: {
    textDecoration: 'none',
  },
}));

const MenuAppBar = ({ userName, signOut }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <MenuIcon />
          <Typography variant='h6' className={classes.title}>
            <a href='/home'>Que Ver App</a>
          </Typography>

          {userName && (
            <div>
              <IconButton
                aria-label='account of current user'
                aria-controls='menu-appbar'
                aria-haspopup='true'
                onClick={handleMenu}
                color='inherit'
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id='menu-appbar'
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem>
                  <a className={classes.linkMenu} href='/'>
                    Home
                  </a>
                </MenuItem>
                <MenuItem>
                  <Link to='/watch-later'>Watch Later List</Link>
                </MenuItem>
                <MenuItem>
                  <Link to='/favourite-movies'>Favorites Movies</Link>
                  {/* <a className={classes.linkMenu} href='/show-favourite'>
                    Favorites Movies
                  </a> */}
                </MenuItem>
                <MenuItem>
                  <a className={classes.linkMenu} href='/search-movie'>
                    Search Movie
                  </a>
                </MenuItem>
                <MenuItem onClick={signOut}>Log out</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
              <span>{userName}</span>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default MenuAppBar;

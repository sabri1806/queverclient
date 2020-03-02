import { makeStyles } from '@material-ui/core/styles';
import COLORS from '../../styles/Colors';

const drawerWidth = 240;

export default makeStyles(theme => ({
  drawerPaper: {
    minWidth: 250,
    backgroundColor: '#ffffff',
    border: 'none',
    boxShadow: '1px 0 0 0 #e6ebf1',
    height: '100%',
    paddingTop: 32,
    position: 'relative',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    whiteSpace: 'nowrap',
    width: drawerWidth,
  },
  drawerPaperMobile: {
    minWidth: 250,
    backgroundColor: '#ffffff',
    border: 'none',
    height: '100%',
    paddingTop: 32,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    whiteSpace: 'nowrap',
    width: drawerWidth,
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: 0,
  },
  appBarRoot: {
    backgroundColor: `${COLORS.MAIN_COLOR}`,
    height: 32,
    boxShadow: 'none',
    zIndex: theme.zIndex.drawer + 1,
  },
  loading: {
    left: '50%',
    margin: '-25px 0 0 -25px',
    position: 'absolute',
    top: '50vh',
  },
  userInfo: {
    backgroundColor: '#ffffff',
    padding: '24px 24px 14px 24px',
  },
  countrySelector: {
    borderBottom: '1px solid #e6ebf1',
    display: 'flex',
    padding: '0 14px 12px',
    '& > div': {
      flex: 1,
    },
  },
  avatar: {
    height: 56,
    width: 56,
  },
  userName: {
    display: 'block',
    fontSize: 13,
    marginTop: '20px',
    minHeight: 20,
  },
  menuItem: {
    paddingBottom: 16,
    paddingRight: 16,
    paddingTop: 16,
    '&:hover': {
      backgroundColor: '#eef1f5',
    },
  },
  menuItemText: {
    fontFamily: 'inherit',
    fontSize: 13,
    fontWeight: 'normal',
  },
  menuItemTextRoot: {},
  subMenuItem: {
    paddingLeft: 73,
  },
  selectedMenuItem: {
    backgroundColor: '#fdebee',
    borderLeft: `2px solid ${COLORS.MAIN_COLOR}`,
  },
  selectedMenuItemText: {
    color: `${COLORS.MAIN_COLOR}`,
    fontWeight: 'bold',
  },
  selectedSubMenuItemText: {
    fontWeight: 'bold',
  },
  languageSelector: {
    borderTop: '1px solid #e6ebf1',
    margin: '8px 24px 0',
    paddingTop: 16,
  },
  flagButtonRoot: {
    height: 40,
    width: 40,
  },
  flagButtonIcon: {
    height: 17,
    width: 24,
  },
  badgeNew: {
    backgroundColor: '#fff0f1',
    borderRadius: 10,
    color: '#f33959',
    fontFamily: 'inherit',
    fontSize: 10,
    padding: '3px 6px',
  },
  badgeNotifications: {
    backgroundColor: '#f33959',
    borderRadius: 10,
    color: '#ffffff',
    fontFamily: 'inherit',
    fontSize: 13,
    lineHeight: '20px',
    minWidth: 20,
    padding: '0 6px',
    textAlign: 'center',
  },
  version: {
    color: '#b4bfcc',
    float: 'right',
    fontSize: 13,
    paddingRight: 12,
  },
}));

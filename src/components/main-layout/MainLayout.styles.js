import { makeStyles } from '@material-ui/core/styles';
import COLORS from '../../styles/Colors';

export default makeStyles(theme => ({
  root: {
    display: 'flex',
    flexGrow: 1,
    minHeight: '100vh',
    overflow: 'hidden',
    position: 'relative',
    zIndex: 1,
  },
  appBarRoot: {
    backgroundColor: `${COLORS.MAIN_COLOR} !important`,
    height: 32,
    boxShadow: 'none',
    zIndex: theme.zIndex.drawer + 1,
  },
  logo: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 9,
    width: 44,
  },
  content: {
    backgroundColor: '#eef1f5', //theme.palette.background.default
    flexGrow: 1,
    overflow: 'hidden',
    paddingBottom: 80,
    paddingTop: 32,
    position: 'relative',
  },
  mobileToolbarRoot: {
    backgroundColor: '#ffffff',
    boxShadow: '0 1px 0 0 #e6ebf1',
    marginBottom: 1,
  },
  menuButton: {
    marginLeft: '12px !important',
    marginRight: '20px !important',
  },
  sectionHeader: {
    backgroundColor: '#ffffff',
    boxShadow: '0 1px 0 0 #e6ebf1',
    minHeight: 64,
    position: 'relative',
  },
  sectionContent: {
    [theme.breakpoints.only('xs')]: {
      maxWidth: '100vw',
      padding: '24px 0px',
    },
    [theme.breakpoints.up('sm')]: {
      padding: '24px',
    },
  },
  titleWrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  sectionTitle: {
    [theme.breakpoints.only('xs')]: {
      fontSize: '20px',
      fontWeight: 'bold',
      width: '100%',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '30px',
      fontWeight: 'normal',
      margin: '0 0 24px 0',
    },
  },
  sectionSubtitle: {
    marginTop: '-10px',
    lineHeight: '35px',
  },
  countrySelector: {
    position: 'absolute',
    right: 24,
    top: 15,
  },
  actionBtnMobile: {
    position: 'absolute',
    right: 10,
    top: 8,
  },
}));

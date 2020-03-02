import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  header: {
    borderBottom: '1px solid #e6ebf1',
    display: 'flex',
    width: '100%',
  },
  boxContainerSelected: {
    borderBottomColor: '#F32245',
    borderBottomStyle: 'solid',
    borderBottomWidth: '2px',
    padding: '24px 18px 24px 18px',
    margin: '0 6px 0 6px',
  },
  boxContainer: {
    cursor: 'pointer',
    margin: '0 6px 0 6px',
    padding: '24px 18px 24px 18px',
  },
  title: {
    fontSize: 17,
    fontWeight: '100',
    margin: 0,
  },
  content: {
    padding: '40px 24px',
  },
  footer: {
    backgroundColor: '#eaedff',
    color: '#5867c3',
    display: 'flex',
    margin: 24,
    padding: '16px 24px',
    '& > span': {
      letterSpacing: 'normal',
      paddingRight: 20,
    },
    [theme.breakpoints.only('xs')]: {
      flexDirection: 'column',
      '& > span': {
        paddingBottom: 20,
        paddingRight: 0,
      },
    },
  },
  ordersButton: {
    backgroundColor: '#5867c3',
    border: 'none',
    color: '#ffffff',
    fontSize: '13px',
    fontWeight: 'bold',
    textTransform: 'none',
  },
}));

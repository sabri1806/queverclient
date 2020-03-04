import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
  detailContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  movieDetail: {
    width: 500,
  },
  plot: {
    padding: 24,
  },
}));

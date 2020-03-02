import React from 'react';
import PropTypes, { oneOfType } from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import WarningIcon from '@material-ui/icons/Warning';

const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon,
};

const useStyles = makeStyles(theme => ({
  content: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
  },
  success: {
    backgroundColor: '#2ec4b6',
    borderColor: '#2ec4b6 !important',
  },
  error: {
    backgroundColor: '#f33959',
    borderColor: '#f33959 !important',
  },
  info: {
    backgroundColor: '#5867c3',
    borderColor: '#5867c3 !important',
  },
  warning: {
    backgroundColor: '#ffaa00',
    borderColor: '#ffaa00 !important',
  },
  multiline: {
    alignItems: 'flex-start',
    backgroundColor: '#ffffff',
    borderLeft: '3px solid',
    boxShadow: '0 10px 20px 0 rgba(0, 0, 0, 0.2)',
    color: '#1f2532',
    '& .MuiSnackbarContent-action': {
      color: '#9aa9b9',
    },
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: 20,
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    fontWeight: 'bold',
    padding: '3px 0 6px',
  },
  message: {
    alignItems: 'center',
    display: 'flex',
    [theme.breakpoints.up('sm')]: {
      maxWidth: 300,
    },
  },
}));

const CustomSnackbar = ({
  open = false,
  className = '',
  title = null,
  message = null,
  onClose,
  variant = 'info',
  showIcon = true,
}) => {
  const classes = useStyles();

  const Icon = () => {
    if (variant) {
      const IconComp = variantIcon[variant];
      return (
        <IconComp className={classNames(classes.icon, classes.iconVariant)} />
      );
    } else {
      return null;
    }
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={open}
      onClose={onClose}
    >
      <SnackbarContent
        className={classNames(classes.content, classes[variant], className, {
          [classes.multiline]: title,
        })}
        aria-describedby='snackbar-content'
        message={
          <span id='snackbar-content' className={classes.message}>
            {showIcon && <Icon />}
            <span className={classes.textContainer}>
              {title && <span className={classes.title}>{title}</span>}
              {message && <span>{message}</span>}
            </span>
          </span>
        }
        action={[
          <IconButton
            key='close'
            aria-label='Close'
            color='inherit'
            className={classes.close}
            onClick={onClose}
          >
            <CloseIcon className={classes.icon} />
          </IconButton>,
        ]}
      />
    </Snackbar>
  );
};

CustomSnackbar.propTypes = {
  className: PropTypes.string,
  title: oneOfType([PropTypes.string, PropTypes.object]),
  message: oneOfType([PropTypes.string, PropTypes.object]),
  onClose: PropTypes.func,
  variant: PropTypes.oneOf(['success', 'warning', 'error', 'info']),
  showIcon: PropTypes.bool,
};

export default CustomSnackbar;

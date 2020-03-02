import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import styles from './CustomDialog.styles';

class CustomDialog extends Component {
  render() {
    const {
      classes,
      description,
      open,
      onClose,
      title,
      message,
      children,
      actions,
      ...props
    } = this.props;

    return (
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
        {...props}
      >
        {title && (
          <DialogTitle
            id='alert-dialog-title'
            disableTypography
            classes={{
              root: classes.titleRoot,
            }}
          >
            {title}
            {description && (
              <p className={classes.description}>{description}</p>
            )}
          </DialogTitle>
        )}
        <DialogContent
          classes={{
            root: classes.contentRoot,
          }}
        >
          {message && (
            <DialogContentText
              id='alert-dialog-description'
              classes={{
                root: classes.contentTextRoot,
              }}
            >
              {message}
            </DialogContentText>
          )}
          {children}
        </DialogContent>
        {actions && (
          <DialogActions
            classes={{
              root: classes.actionsRoot,
            }}
          >
            {actions &&
              actions.length > 0 &&
              actions.map((action, index) => {
                const primaryAction = actions.length === index + 1;
                let actionClasses = [classes.action];
                let actionLabelClasses = [classes.actionLabel];

                actionClasses.push(
                  primaryAction
                    ? classes.actionPrimary
                    : classes.actionSecondary,
                );
                actionLabelClasses.push(
                  primaryAction
                    ? classes.actionPrimaryLabel
                    : classes.actionSecondaryLabel,
                );
                const actionDisabledClasses = primaryAction
                  ? classes.actionPrimaryDisabled
                  : classes.actionSecondaryDisabled;

                if (action.class) {
                  actionClasses.push(action.class);
                }

                return (
                  <Button
                    key={index}
                    onClick={action.onClick}
                    autoFocus={primaryAction}
                    disabled={action.disabled || false}
                    classes={{
                      root: actionClasses.join(' '),
                      label: actionLabelClasses.join(' '),
                      disabled: actionDisabledClasses,
                    }}
                  >
                    {action.label}
                  </Button>
                );
              })}
          </DialogActions>
        )}
      </Dialog>
    );
  }
}

export default withStyles(styles, { withTheme: true })(CustomDialog);

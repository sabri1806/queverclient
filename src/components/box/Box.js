import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

const styles = theme => ({
  box: {
    backgroundColor: '#ffffff',
    border: '1px solid #e6ebf1',
    position: 'relative',
  },
  header: {
    borderBottom: '1px solid #e6ebf1',
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleContainer: {
    padding: 24,
  },
  noteContainer: {
    padding: 24,
  },
  title: {
    fontSize: 17,
    fontWeight: '100',
    margin: 0,
  },
  note: {
    fontSize: 13,
    fontWeight: '100',
    margin: 0,
    color: '#9aa9b9',
  },
  actionsContainer: {
    alignSelf: 'center',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'baseline',
    flexGrow: 2,
    justifyContent: 'flex-end',
    padding: '9px 15px',
  },
  description: {
    color: '#9aa9b9',
    fontSize: 13,
    marginBottom: 0,
    marginTop: -14,
    maxWidth: 750,
    padding: '0 24px 24px',
  },
  boxContent: {
    minHeight: 115,
    position: 'relative',
  },
  loadingContainer: {
    backgroundColor: 'rgba(238,241,245, 0.3)',
    bottom: 0,
    height: '100%',
    position: 'absolute',
    textAlign: 'center',
    top: 0,
    width: '100%',
    zIndex: 100,
  },
  loading: {
    left: '50%',
    margin: '-10px 0 0 -25px',
    position: 'absolute',
    top: '50%',
  },
  actionButtonContainer: {
    position: 'relative',
  },
  actionButtonLoading: {
    color: '#2ec4b6',
    left: -6,
    position: 'absolute',
    top: -6,
  },
});

class Box extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
  };

  static defaultProps = {};

  state = {};

  getButtonComponent(actionButton, index) {
    const { classes } = this.props;

    const button = actionButton.button ? (
      actionButton.button
    ) : (
      <IconButton
        color='inherit'
        aria-label='open drawer'
        onClick={actionButton.action}
        disabled={actionButton.disabled}
      >
        {actionButton.icon}
      </IconButton>
    );

    const content = actionButton.tooltip ? (
      <Tooltip
        id={'tooltip-icon-' + index}
        title={actionButton.tooltip}
        disableFocusListener
      >
        {button}
      </Tooltip>
    ) : (
      button
    );
    return (
      <div
        key={'action-tooltip-' + index}
        className={classes.actionButtonContainer}
      >
        {content}
        {!actionButton.button && actionButton.loading && (
          <CircularProgress size={60} className={classes.actionButtonLoading} />
        )}
      </div>
    );
  }

  render() {
    const {
      classes,
      className,
      loading,
      title,
      description,
      note,
      actionButtons,
    } = this.props;

    return (
      <div className={classNames(classes.box, className)}>
        {(title || description || actionButtons) && (
          <div className={classes.header}>
            <div className={classes.flexRow}>
              {title && (
                <div className={classes.titleContainer}>
                  <h5 className={classes.title}>{title}</h5>
                </div>
              )}
              {actionButtons && (
                <div className={classes.actionsContainer}>
                  {actionButtons.map((actionButton, index) => {
                    return this.getButtonComponent(actionButton, index);
                  })}
                </div>
              )}
              {note && (
                <div className={classes.noteContainer}>
                  <h5 className={classes.note}>{note}</h5>
                </div>
              )}
            </div>
            {description && (
              <p className={classes.description}>{description}</p>
            )}
          </div>
        )}
        {loading && (
          <div className={classes.loadingContainer}>
            <CircularProgress size={50} className={classes.loading} />
          </div>
        )}
        <div className={classes.boxContent}>{this.props.children}</div>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Box);

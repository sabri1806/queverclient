const styles = theme => ({
  titleRoot: {
    borderBottom: '1px solid #e6ebf1',
    fontFamily: 'inherit',
    fontSize: 20,
    fontWeight: 'bold',
    padding: '20px 24px',
  },
  contentRoot: {
    borderBottom: '1px solid #e6ebf1',
    padding: 24,
  },
  contentTextRoot: {
    color: '#1f2532',
    fontFamily: 'inherit',
    fontSize: 17,
    fontWeight: 'normal',
    margin: 0,
  },
  description: {
    fontSize: 13,
    color: '#9aa9b9',
  },
  actionsRoot: {
    margin: 0,
    padding: 20,
  },
  action: {
    borderRadius: 2,
    minWidth: 110,
    padding: '6px 15px',
  },
  actionPrimary: {
    backgroundColor: '#2ec4b6',
  },
  actionSecondary: {
    backgroundColor: 'transparent',
  },
  actionLabel: {
    fontSize: 13,
    fontWeight: 'bold',
    textTransform: 'none',
  },
  actionPrimaryLabel: {
    color: '#ffffff',
  },
  actionSecondaryLabel: {
    color: '#9aa9b9',
  },
  actionPrimaryDisabled: {
    backgroundColor: '#e6ebf1!important',
    borderColor: '#e6ebf1!important',
    color: '#e6ebf1!important',
  },
  actionSecondaryDisabled: {},
});

export default styles;

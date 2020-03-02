import React, { useState } from 'react';
import Button from '../buttons/SecondaryButton';
import Box from './Box';
import TooltipWithButton from '../tooltip-with-button/TooltipWithButton';
import useStyles from './BoxWithTabs.style';

const Footer = ({ button, message }) => {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <span dangerouslySetInnerHTML={{ __html: message }} />
      <div>
        <Button onClick={button.action} className={classes.ordersButton}>
          {button.title}
        </Button>
      </div>
    </div>
  );
};

const BoxWithTabs = ({ tabs, tooltip, footer, onChangeTab }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const classes = useStyles();

  const handleChangeTab = (index, tab) => {
    onChangeTab(tab.title);
    setSelectedTab(index);
  };

  return (
    <Box>
      <div className={classes.header}>
        {tabs &&
          tabs.map((tab, index) => (
            <div
              key={tab['title']}
              onTouchStart={() => handleChangeTab(index, tab)}
              onClick={() => handleChangeTab(index, tab)}
              className={
                selectedTab === index
                  ? classes.boxContainerSelected
                  : classes.boxContainer
              }
            >
              <h5 className={classes.title}>{tab['title']}</h5>
            </div>
          ))}
        {tooltip && <TooltipWithButton {...tooltip} />}
      </div>

      <div className={classes.content}>
        {tabs && tabs[selectedTab] && tabs[selectedTab]['content']}
      </div>

      {footer && <Footer message={footer.message} button={footer.button} />}
    </Box>
  );
};

export default BoxWithTabs;

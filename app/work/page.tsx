'use client';
import { Box, Tab, Tabs } from '@mui/material';
import React from 'react';
import FIT from './FIT';
import OEM from './OEM'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <>{children}</>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,

  };
}

function Work() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>

      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
      >
        <Tab label="Financial Intelligence Tool" {...a11yProps(0)} />
         <Tab label="Raw Material Supply Chain Management Application" {...a11yProps(1)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <FIT />
      </TabPanel >
      <TabPanel  value={value} index={1}>
        <OEM />
      </TabPanel >
    </>
  );
}


export default Work
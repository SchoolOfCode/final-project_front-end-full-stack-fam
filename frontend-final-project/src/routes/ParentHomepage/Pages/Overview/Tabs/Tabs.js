import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import "./Tabs.css";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs({userData, attempts}) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }} className="box-border-tabs">
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" className='tab-font'>
          <Tab label=" Recent Activity" {...a11yProps(0)} />
          <Tab label="Tasks" {...a11yProps(1)} />
          <Tab label="Awards" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0} >
        <div className='tab-font'>
        <h4 > Activity Name: Number Line</h4>
        <> </>
        <h4 > Student Name: {userData.name} </h4>
        <h4> Score: {userData.scoreone} % </h4>
        <h4> Attempts: {attempts} </h4>
        <h4> Date Completed: {userData.datecompleted} </h4>
        <h4> Time Completed: {userData.timecompleted} </h4>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <h3 className='tab-font'> Number Line Task: </h3>
          <h4 className='tab-font'>This task falls under the 'Number and place value' topic 
           that is set by the Department of Education as a statutory requirment for 
           pupils that are in year 2. This activity tests {userData.name} on how 
           to count in steps of 2 forward and backwards in a fun and interactive way!
           To learn more about these requirment <a href="https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/335158/PRIMARY_national_curriculum_-_Mathematics_220714.pdf"
           target="_blank" > 
           click here.  </a>
      </h4>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <h4 className='tab-font'> {userData.name} has no awards yet. </h4>
      </TabPanel>
    </Box>
  );
}


import { Heading } from '@atoms/Heading';

import { SignUpForm } from '@organisms/SignUpForm';
import { TwoColumnLayout } from '@templates/TwoColumnLayout/TwoColumnLayout';
import classes from './SignUp.module.scss';

import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import { useState } from 'react';

export const SignUp = () => {

  const [tabValue, setTabValue] = useState('1');
  const [completed, setIsCompleted] = useState(false);

  const handleIsCompleted = () => {
    setTabValue('2');
    setIsCompleted(true);
  };

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setTabValue(newValue);
  };

  return (
          <TwoColumnLayout>
              <Heading>
                <h1>Welcome to Zive,<br/> Let’s create an account</h1>
                <p>Enter the fields below to get started</p>
              </Heading>
              <TabContext value={tabValue}>
              <div className={classes['tab-container']}>
                <TabList onChange={handleChange} aria-label="lab API tabs example">
                  <Tab label="Details" value="1" />
                  <Tab label="Payment" value="2" disabled={ !completed }/>
                </TabList>
              </div>
              <TabPanel sx={{ padding: '0px' }} value="1">
              <div className={classes['signup-container']}>
                <div className={classes['right-container']}>
                    <SignUpForm handleIsCompleted= {handleIsCompleted }></SignUpForm>
                </div>
            </div>
             </TabPanel>
              <TabPanel sx={{ padding: '0px' }}  value="2">Payment</TabPanel>
              </TabContext>
           </TwoColumnLayout>
  );
};
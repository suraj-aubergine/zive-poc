import { AppContext } from '@utils/context/AppContext';
import classes from './TwoColumnLayout.module.scss';
import { LeftSection } from '@molecules/LeftSection';
import { useState } from 'react';
import React from 'react';

export interface TwoColumnLayoutProps {
  children: React.ReactNode
}
export const TwoColumnLayout = ({ children }: TwoColumnLayoutProps) => {
  const [state, setState ] = useState<any>(null);

  const handleValueChange = (values) => {
    setState( values );
  };

  return (
    <AppContext.Provider value={{ state, handleValueChange }}>
        <div className={classes['layout-container']}>
          <div className={classes['left-section-container']}>
            <LeftSection />
          </div>
          <div className={classes['right-section-container']}>
              { children }
          </div>
        </div>
      </AppContext.Provider>
  );
};

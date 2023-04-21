import { createContext, useState } from 'react';

export const AppContext = createContext<any>({ value: false, setValue: () => {} });

export const AppProvider = ({ children }) => {
  const [state, setState ] = useState<any>(null);

  const handleValueChange = (values) => {
    setState({ ...values });
  };

  console.log('Context Value: ', state);

  return (
  <AppContext.Provider value={{ state, handleValueChange }}>
        { children }
    </AppContext.Provider>
  );
};
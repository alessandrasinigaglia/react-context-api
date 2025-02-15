import React, { createContext, useState, useContext } from 'react';

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const [alertMessage, setAlertMessage] = useState('');

  const showAlert = (message) => setAlertMessage(message);

  return (
    <AlertContext.Provider value={{ alertMessage, showAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

export const useAlert = () => useContext(AlertContext);

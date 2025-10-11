import React, { createContext, useContext, useEffect, useState } from 'react';
import AlertCard from '../components/AlertCard';

export type AlertType = 'success' | 'error' | 'warning';

export type GlobalAlert = {
  type: AlertType;
  title: string;
  message: string;
};

interface GlobalAlertContextType {
  alert: GlobalAlert | null;
  showAlert: (alert: GlobalAlert) => void;
  hideAlert: () => void;
}

const GlobalAlertContext = createContext({} as GlobalAlertContextType);

export const GlobalAlertProvider = ({ children }: { children: React.ReactNode }) => {
  const [alert, setAlert] = useState<GlobalAlert | null>(null);

  const showAlert = (alert: GlobalAlert) => setAlert(alert);
  const hideAlert = () => setAlert(null);


  useEffect(() =>{
    if(alert){
        const timer = setTimeout(hideAlert, 4000);
        return () => clearTimeout(timer);
    }
  }, [alert])

  return (
    <GlobalAlertContext.Provider value={{ alert, showAlert, hideAlert }}>
      {children}
      <AlertCard />
    </GlobalAlertContext.Provider>
  );
};

export const useGlobalAlert = () => useContext(GlobalAlertContext);
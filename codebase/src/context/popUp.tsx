/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useState, useContext, ReactNode } from 'react';

type ControlPopUpContextType = {
  formPopUp: boolean;
  uploadPopUp: boolean;
  logoutPopUp: boolean;
  setLogout: () => void;
  setFilePopUp: () => void;
  setPopup: () => void;
  cancelPopUp: () => void;
};

const ControlPopUpContext = createContext<ControlPopUpContextType>({
  formPopUp: false,
  uploadPopUp: true,
  logoutPopUp: false,
  setLogout: () => {},
  setFilePopUp: () => {},
  setPopup: () => {},
  cancelPopUp: () => {},
});

export const useControlPopUp = () => {
  
  const { formPopUp, uploadPopUp, setFilePopUp, setPopup, cancelPopUp, logoutPopUp, setLogout} = useContext(ControlPopUpContext);
  return {
    formPopUp,
    uploadPopUp,
    setPopup,
    setFilePopUp,
    cancelPopUp,
    logoutPopUp,
    setLogout,
  };
};

type ControlPopUpProviderProps = {
  children: ReactNode;
};

export const ControlPopUpProvider = ({ children }: ControlPopUpProviderProps) => {
  const [formPopUp, setFormPopUp] = useState<boolean>(false);
  const [uploadPopUp, setUploadPopUp] = useState<boolean>(false);
  const [logoutPopUp, setLogoutPopUp] = useState<boolean>(false);

  
  const setPopup = () => {
    setFormPopUp(true);
  };

  const cancelPopUp = () => {
    setFormPopUp(false);
    setUploadPopUp(false);
    setLogoutPopUp(false);
  };

  const setFilePopUp = () => {
    setUploadPopUp(true)
  }

  const setLogout = () => {
    setLogoutPopUp(true)
  }

  return <ControlPopUpContext.Provider value={{ formPopUp, setPopup, cancelPopUp, setFilePopUp, uploadPopUp, setLogout, logoutPopUp}}>{children}</ControlPopUpContext.Provider>;
};

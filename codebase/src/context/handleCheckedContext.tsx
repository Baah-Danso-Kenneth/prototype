/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, createContext, useContext, ReactNode } from "react";
import { CheckedProps,  StudentProps } from 'utils/model';

const checkedContext = createContext<CheckedProps>({} as CheckedProps);

interface ChildrenProps {
  children: ReactNode;
}

type CheckedStudent = string[];

export const CheckedProvider = ({ children }: ChildrenProps) => {
  const [checkedStudent, setCheckedStudent] = useState<CheckedStudent>([]);

  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>, user: StudentProps) => {
    const { checked } = event.target;
    if (checked) {
      addCheckedStudent(user);
    } else {
      removeCheckedStudent(user);
    }
  };

  const addCheckedStudent = (user: StudentProps) => {
    setCheckedStudent([...checkedStudent, user.email]);
  };

  const removeCheckedStudent = (user: StudentProps) => {
    setCheckedStudent(checkedStudent.filter((student) => student !== user.email));
  };

  return (
    <checkedContext.Provider value={{ handleCheck, checkedStudent }}>
      {children}
    </checkedContext.Provider>
  );
};

export const useChecked = (): CheckedProps => {
  return useContext(checkedContext);
};

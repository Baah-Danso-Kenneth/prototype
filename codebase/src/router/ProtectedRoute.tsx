import React, { useEffect, useState } from 'react';
import {  Navigate } from 'react-router-dom';
import { UserRole } from 'utils/types/user';
import { loadFromLocalStorage } from 'utils/loadFromLocalStorage';
import { saveToLocalStorage } from 'utils/saveToLocalStorage';
import {useLocation} from "react-router-dom";
import { AdminPage } from 'pages/adminPage';
import { StudentPage } from 'pages/studentPage';
import { LecturerDashboard } from 'pages/lecturerPage';

const ProtectedRoute = (props:UserRole) => {
  const [user] = useState(loadFromLocalStorage('user'));
  const location = useLocation();

  const pathSegments = location.pathname.split('/').filter(segment => segment !== '');

  useEffect(() => {
    saveToLocalStorage('user', user);
  }, [user]);


  if (user?.role !==props.role) {
    return(
      <Navigate to="/" replace={true} />
    )
  }

  return (
    <>
      {(pathSegments[0] === "admin") && <AdminPage/>}
      {(pathSegments[0] === "student") && <StudentPage/>}
      {(pathSegments[0] === "lecturer") && <LecturerDashboard/>}
    </>
  );
};

export default ProtectedRoute;

import React from 'react';
import { useAuth } from 'context/authContext';
import { LogoutStyle } from 'styles/AdminNavBar.styled';

function LogOutButton() {
  const { logout } = useAuth();

  const handleSubmit = () => {
    logout();
  };

  return (
    <LogoutStyle onClick={handleSubmit}>
      <h3>Logout</h3>
    </LogoutStyle>
  );
}

export default LogOutButton;

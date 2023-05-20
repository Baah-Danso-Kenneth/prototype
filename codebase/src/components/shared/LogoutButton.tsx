import React from 'react';
import { useAuth } from 'context/authContext';
import LogOut from "../../assets/images/Vector(17).png"
import { LogoutStyle } from 'styles/AdminNavBar.styled';
function LogoutButton() {
  const { logout } = useAuth();

  const handleSubmit = () => {
    logout();
  };

  return (
    <LogoutStyle onClick={handleSubmit}>
      <img src={LogOut} alt="logout" />
      <h3>Logout</h3>
    </LogoutStyle>
  );
}

export default LogoutButton;
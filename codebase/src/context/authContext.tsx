import { useState, createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { api, apiLogout, apiRequest } from "utils/api";
import { toast } from "react-toastify";
import { saveToLocalStorage, getUserFromLocalStorage } from "utils/saveToLocalStorage";

import {
  AuthInfo,
  User,
  UserLogin,
  AuthChildProvider,
  UserProps,
  ResetPassword,
} from "utils/model";

const AuthContext = createContext<AuthInfo>({} as AuthInfo);

export const AuthProvider = ({ children }: AuthChildProvider) => {
  const [user, setUser] = useState<User | null>(getUserFromLocalStorage());
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [isAuthenticated]=useState(false)
  const [success, setSuccess] = useState("");

  const login = async ({
    email_or_id,
    password,
  }: UserLogin): Promise<UserProps> => {
    const url = process.env.REACT_APP_BASE_URL;
    try {
      const response = await apiRequest(`${url}/user/login`, {
        email_or_id,
        password,
      });
      saveToLocalStorage("user", response.user);
      setUser(response.user);
      return response.user;
    } catch (error) {
      toast.error("Login Failed");
      throw error;
    }
  };

  const logout = async () => {
    try {
      await apiLogout();
      setSuccess("");
      setUser(null);
      navigate("/");
      window.history.pushState(null, window.location.href);
      window.onpopstate = function () {
        window.history.go(1);
      };
      setError("");
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
      setError("internal server error");
    }
  };

  const reset = async (resetPassword: ResetPassword) => {
    try {
      const response = await api.resetPassword(resetPassword);
      saveToLocalStorage("user", response.user);
      setUser(response.user);
      return response.user;
    } catch (error) {
      throw error;
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, logout, login, success, error,reset,isAuthenticated }}
      // value={{ user, logout, login, success, error, reset }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthInfo => {
  return useContext(AuthContext);
};

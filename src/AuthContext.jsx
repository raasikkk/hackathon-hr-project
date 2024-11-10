import { createContext, useState, useEffect } from "react";
import axios from "axios";

const API_URL = "https://fh-backend-ashy.vercel.app/api/auth/";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkLoggedIn = async () => {
      try {
        const response = await axios.get(`${API_URL}isLogged`, {
          withCredentials: true,
        });
        if (response.data.loggedIn) {
          setUser(response.data.user);
        }
      } catch (error) {
        console.error("Error checking logged status", error);
      }
    };
    checkLoggedIn();
  }, []);

  const register = async (username, password) => {
    try {
      const response = await axios.post(
        `${API_URL}register`,
        { username, password },
        { withCredentials: true }
      );
      setUser(response.data.user);
      return response.data;
    } catch (error) {
      console.error("Error registering user", error);
      throw error;
    }
  };

  const login = async (username, password) => {
    try {
      const response = await axios.post(
        `${API_URL}login`,
        { username, password },
        { withCredentials: true }
      );
      setUser(response.data.user);
      return response.data;
    } catch (error) {
      console.error("Login failed", error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await axios.post(`${API_URL}logoutUser`, {}, { withCredentials: true });
      setUser(null);
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
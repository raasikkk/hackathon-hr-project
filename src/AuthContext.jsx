import { createContext, useState, useEffect } from "react";
import axios from "axios";

const API_URL = "https://fh-backend-ashy.vercel.app/api/auth/";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkLoggedIn = async () => {
      try {
        const response = await axios.get(
          `https://fh-backend-ashy.vercel.app/api/auth/isLogged`,
          {
            withCredentials: true,
          }
        );
        if (response.data.isLogged) {
          setUser(response.data.isLogged);
          console.log(response.data.isLogged);
        }
      } catch (error) {
        console.error("Error checking logged status", error);
      }
    };
    checkLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

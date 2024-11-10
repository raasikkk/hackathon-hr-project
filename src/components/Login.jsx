import { useState, useContext } from "react";
import { AuthContext } from "../AuthContext";
import axios from "axios";

function Login() {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://fh-backend-ashy.vercel.app/api/auth/login",
        {
          email,
          password,
        }
      );
      console.log(res);
    } catch (error) {
      alert("Login failed");
      console.error("Error login user:", error.response || error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;

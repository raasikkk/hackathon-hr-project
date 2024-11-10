import { useState, useContext } from "react";
import { AuthContext } from "../AuthContext";

function Register() {
  const { register } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repPassword, setRepPassword] = useState(""); // repPassword for confirming password

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== repPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      await register(email, password, repPassword); // Send email and password for registration
      alert("Registered successfully!");
    } catch (error) {
      alert("Registration failed");
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="placeholder-corange"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="placeholder-corange"
      />
      <input
        type="password"
        placeholder="Confirm Password"
        value={repPassword}
        onChange={(e) => setRepPassword(e.target.value)}
        className="placeholder-corange"
      />
      <button type="submit">Register</button>
    </form>
  );
}

export default Register;

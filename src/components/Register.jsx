import { useState } from "react";
// import { AuthContext } from "../AuthContext";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Register() {
  //   const { register } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repPassword, setRepPassword] = useState(""); // repPassword for confirming password

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     if (password !== repPassword) {
  //       alert("Passwords do not match");
  //       return;
  //     }

  //     try {
  //       await register(email, password, repPassword); // Send email and password for registration
  //       alert("Registered successfully!");
  //     } catch (error) {
  //       alert("Registration failed");
  //       console.error(error);
  //     }
  //   };
  const handleSubmit = async (e) => {
    e.preventDefault();

    // const API = "https://fh-backend-ashy.vercel.app/api/auth";
    try {
      const res = await axios.post(
        "https://fh-backend-ashy.vercel.app/api/auth/register",
        {
          email,
          password,
          repPassword,
        }
      );
      console.log(res);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Navbar />
      <form
        onSubmit={handleSubmit}
        className="max-w-[1000px] min-h-[600px] rounded-[11px] mt-[65px] bg-white shadow-lg mx-auto w-full flex flex-col gap-7 items-center"
      >
        <h1 className="text-corange text-[40px] font-extrabold">
          Создайте свой Аккаунт
        </h1>
        <h2 className="text-corange text-[20px] font-semibold">
          Регистрируйтесь и начните анализ резюме!
        </h2>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="placeholder border-2 border-corange text-corange rounded-[11px] p-5 sm:w-[350px] md:w-[700px] px-5"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="placeholder border-2 border-corange text-corange rounded-[11px] p-5 sm:w-[350px] md:w-[700px] px-5"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={repPassword}
          onChange={(e) => setRepPassword(e.target.value)}
          className="placeholder border-2 border-corange text-corange rounded-[11px] p-5 sm:w-[350px] md:w-[700px] px-5"
        />
        <button
          type="submit"
          className="bg-corange rounded-[11px] font-bold text-[20px] sm:w-[350px] md:w-[700px] p-5"
        >
          Register
        </button>
      </form>
      <Footer />
    </>
  );
}

export default Register;

import { useState } from "react";
// import { AuthContext } from "../AuthContext";
import axios from "axios";
import { Navigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Login() {
  //   const { login } = useContext(AuthContext);
  const [value, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://fh-backend-ashy.vercel.app/api/auth/login",
        {
          value,
          password,
        }
      );
      <Navigate to="/logged-in" />;
      console.log(res);
    } catch (error) {
      console.error(error);
      alert("Неправильный логин или пароль");
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
          Войдите в свой Аккаунт
        </h1>
        <h2 className="text-corange text-[20px] font-semibold">
          Авторизируйтесь используя Логин и Пароль
        </h2>
        <input
          type="text"
          placeholder="Value"
          value={value}
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
        <button
          type="submit"
          className="bg-corange rounded-[11px] font-bold text-[20px] sm:w-[350px] md:w-[700px] p-5"
        >
          Login
        </button>
      </form>
      <Footer />
    </>
  );
}

export default Login;

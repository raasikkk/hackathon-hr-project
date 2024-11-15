import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from "../assets/logo.png";
import Register from "./Register";
import Login from "./Login";

const Navbar = () => {
  const [burgerOpen, setBurgerOpen] = useState(false);

  function toggleBurger() {
    setBurgerOpen(!burgerOpen);
  }
  return (
    <nav className=" bg-corange min-h-[55px]">
      <div className="container mx-auto flex justify-between">
        <img src={Logo} alt="logo" className="logo w-[50px] py-[10px]" />
        {/* Large Navbar */}
        <div className="burger hidden lg:flex lg:justify-between lg:w-[80%]">
          <ul className=" pt-[25px] xs:none sm:none md:flex md:justify-between gap-11 text-[20px]">
            <Link to="/">Главная</Link>
            <Link to="/search-resume">Поиск Резюме</Link>
            <Link to="https://github.com/raasikkk/hackathon-hr-project">
              Документация
            </Link>
          </ul>
          <div className="buttons flex items-center gap-5">
            <Link
              to="/register"
              className="bg-white rounded-[11px] p-[8px] text-corange h-[40px]"
            >
              Зарегистрироваться
            </Link>
            <Link
              to="/login"
              className="bg-white rounded-[11px] p-[8px] text-corange h-[40px]"
            >
              Войти
            </Link>
          </div>
        </div>
        {/* Medium Burger Toggle */}
        <button
          className="lg:hidden text-[25px] pr-[25px]"
          onClick={toggleBurger}
        >
          <i className="fas fa-bars"></i>
        </button>
        <div
          className={`fixed top-0 left-0 h-full w-full bg-corange text-white transform ${
            burgerOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out`}
          style={{ zIndex: 1000 }}
        >
          <button
            onClick={toggleBurger}
            className="text-[35px] absolute right-5"
          >
            <i className="fas fa-times"></i>
          </button>
          <ul className="flex flex-col items-center justify-center h-full space-y-11 text-3xl font-semibold">
            <Link to="/">Главная</Link>
            <Link to="/search-resume">Поиск Резюме</Link>
            <Link to="https://github.com/raasikkk/hackathon-hr-project">
              Документация
            </Link>
            <div className="buttons flex flex-col align-center justify-center space-y-6 text-2xl">
              <Link to="/register" className="btn">
                Зарегистрироваться
              </Link>
              <Link to="/login" className="btn">
                Войти
              </Link>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

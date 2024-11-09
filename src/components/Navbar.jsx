import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className=" bg-corange min-h-[55px]">
      <div className="container mx-auto flex justify-between">
        {/* <div className="logo pt-[15px] text-[20px] font-bold">LOGO</div> */}
        <img src={Logo} alt="" className="logo w-[50px] py-[10px]" />
        <ul className="w-[60%] pt-[25px] flex justify-between text-[20px]">
          <Link to="/">Поиск Резюме</Link>
          <Link to="/">Вакансии</Link>
          <Link to="/">Настройки</Link>
          <Link to="/">Документация</Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

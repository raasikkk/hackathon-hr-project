import { useState } from "react";
import heroBg from "../assets/hero-bg.png";
import submitIcon from "../assets/submit-icon.png";
import settingIcon from "../assets/settings-icon.png";
import searchIcon from "../assets/search-icon.png";

const Hero = () => {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div
      className="hero bg-cover bg-center h-[800px]"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="container mx-auto pt-[100px]">
        <div className="hero-header text-[40px] md:text-[50px] lg:text-[60px] font-extrabold">
          <p>Добро Пожаловать в</p>
          <p className="text-corange">
            HireHub <span className="text-white">!</span>
          </p>
          <p className="descr mt-[10px] text-[15px] md:text-[20px] font-semibold">
            Ваша платформа для эффективного и быстрого подбора талантов. <br />
            Используйте интеллектуальный поиск, фильтры и автоматизацию, <br />
            чтобы найти идеальных кандидатов для вашей команды!
          </p>
        </div>

        {/* Inputs */}
        <div className="hero-form mt-[30px] flex flex-wrap w-full gap-[25px] items-center">
          <input
            className="max-w-[450px] h-[65px] border-none bg-no-repeat rounded-[11px] p-5 pl-14 text-corange"
            type="text"
            placeholder="Навыки, профессия, местоположение"
            value={input}
            onChange={handleChange}
            style={{
              backgroundImage: `url(${searchIcon})`,
              backgroundPosition: "10px center",
            }}
          />
          <button className="bg-corange h-[65px] aspect-square rounded-[11px]">
            <img className="mx-auto" src={submitIcon} alt="btn" />
          </button>
          <button className="bg-corange h-[65px] aspect-square rounded-[11px]">
            <img className="mx-auto" src={settingIcon} alt="btn" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
